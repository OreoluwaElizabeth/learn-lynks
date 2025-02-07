import React, { useEffect, useState} from 'react'
import './progress.css';

const ParentAndStudentProgressReport = () => {

    const [formData, setFormData] = useState({
        "id": ""
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
          userId: Number(formData.id),
      };
    
        console.log("Submitting Data:", formData);
      
        try {
          const response = await fetch('http://localhost:8080/api/progress-reports/progress-report-by-id', { 
         
            headers: {
              'Content-Type': 'application/json', 
            },
     
          });
    
          const responseText = await response.text();
          
          if (!response.ok) {
            // console.error("Server Response:", responseText); 
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          // const data = await response.json();
          const data = JSON.parse(responseText);
          alert('Progress report submitted successfully');
          
          setFormData({
            id: ""
          });
          
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while submitting the progress report');
        }
    
      }

  return (
        <div className='progress-report'>
      <h2>Progress Report</h2>
      <form onSubmit={handleSubmit}>
        <label>
          UserID:
          <input name="id" type='text' value={formData.id} onChange={(e) => setFormData({...formData, id: e.target.value })}>
          </input>
        </label>
        <button type="submit">Submit</button>
      </form>
        <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Lesson Plan Name</th>
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
              <td>{report.user?.id || <span style={{ color: "red" }}>MISSING</span>}</td>
              <td>{report.lessonPlan?.lessonPlanName || <span style={{ color: "red" }}>MISSING</span>}</td>
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
  )
}

export default ParentAndStudentProgressReport