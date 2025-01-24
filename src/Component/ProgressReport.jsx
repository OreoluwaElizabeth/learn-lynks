import React, { useEffect, useState } from 'react';
import './progress.css';

const ProgressReport = ({ userId }) => {
  const [progressReports, setProgressReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgressReports = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/progress-reports/generate', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify({ userId }), 
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProgressReports(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProgressReports();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='progress-report'>
      <h2>Progress Report</h2>
      <table>
        <thead>
          <tr>
            <th>Assessment</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Tasks Completed</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {progressReports.map((report, index) => (
            <tr key={index}>
              <td>{report.assessment}</td>
              <td>{report.status}</td>
              <td>{report.startDate}</td>
              <td>{report.endDate}</td>
              <td>{report.noOfTaskCompleted}</td>
              <td>{report.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgressReport;