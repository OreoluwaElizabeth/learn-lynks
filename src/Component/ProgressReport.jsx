import React, { useEffect, useState } from 'react';
import './progress.css';

const ProgressReport = ({ userId }) => {

  const [formData, setFormData] = useState({
    "userId": "",
    "lessonPlanId": "",
    "recommendation": "",
    "status": "ACTIVE",
    "grade": "A"
  })

  const [progressReports, setProgressReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevState) => ({...prevState, [name]: value
    }));
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formattedData = {
      ...formData,
      userId: Number(formData.userId),
      lessonPlanId: Number(formData.lessonPlanId),
  };

    console.log("Submitting Data:", formData);
  
    try {
      const response = await fetch('http://localhost:8080/api/progress-reports/reports', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formData), 
      });

      const responseText = await response.text();
      
      if (!response.ok) {
        // console.error("Server Response:", responseText); 
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // const data = await response.json();
      const data = JSON.parse(responseText);
      alert('Progress report submitted successfully');
      fetchProgressReports();
      setFormData({
        userId: "",
        lessonPlanId: "",
        recommendation: "",
        status: "ACTIVE",
        grade: "A",
        weakness: "",
        strength: "",
        reportDate: "",
      });
      
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the progress report');
    }

  }
  const fetchProgressReports = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/progress-reports/all-reports');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched Reports:", data);
      setProgressReports(data);
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchProgressReports();
  }, []);
  
  // useEffect(() => {
  //   const fetchProgressReports = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/api/progress-reports/generate', {
  //         method: 'POST', 
  //         headers: {
  //           'Content-Type': 'application/json', 
  //         },
  //         body: JSON.stringify({ userId }), 
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       setProgressReports(data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };

  //   fetchProgressReports();
  // }, [userId]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  return (
    <div className='progress-report'>
      <h2>Progress Report</h2>
      <form onSubmit={handleSubmit}>
        <label>
          UserID:
          <input name="userId" type='text' value={formData.userId} onChange={(e) => setFormData({...formData, userId: e.target.value })}>
          </input>
        </label>
      
        <label>
          Lesson Plan ID
          <input name="lessonPlanId" type='text' value={formData.lessonPlanId} onChange={(e) => setFormData({...formData, lessonPlanId: e.target.value })}>
          
          </input>
        </label>
        <label>
          Recommendation
          <textarea name="recommendation" type='text' value={formData.recommendation} onChange={(e) => setFormData({...formData, recommendation: e.target.value })} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Lesson Plan</th>
            <th>Grade</th>
            <th>Status</th>
            <th>Weakness</th>
            <th>Strength</th>
            <th>Recommendation</th>
            <th>Report Date</th>
          </tr>
        </thead>
        <tbody>
          {progressReports.map((report, index) => (
            <tr key={index}>
              <td>{report.userId}</td>
              <td>{report.lessonPlanId}</td>
              <td>{report.grade}</td>
              <td>{report.status}</td>
              <td>{report.weakness}</td>
              <td>{report.strength}</td>
              <td>{report.recommendation}</td>
              <td>{report.reportDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  );

}

export default ProgressReport