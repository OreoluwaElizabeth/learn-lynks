 import React from 'react';
 import './parent.css';
 
 const ParentDashboard = () => {

  const progressReport = [
    {subject: 'Mathematics', grade: 'A', comments: 'Excellent perfomance!'},
    {subject: 'Science', grade: 'B', comments: 'Good, but needs improvement in experiments.'},
    {subject: 'English', grade: 'A', comments: 'Great writing skills!'},
  ];

  const notifications = [
    'Parent-Teacher meeting scheduled for 10th March.',
    'New progress report available for download.',
    'Reminder: School holiday on 25th December.',
  ]

  return (
     <div className='parent-dashboard'>
      <header>
        <h1>Parent Dashboard</h1>
        <nav>
          <ul>
            <li><a href='/progressReportForParentAndStudent'>View Child's Progress Report</a></li>
            <li><a href='#'>Notifications</a></li>
            <li><a href='/settings'>Settings</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='progress-report'>
          <h2>View Progress Report</h2>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Grade</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {progressReport.map((report, index) => (
                <tr key={index}>
                  <td>{report.subject}</td>
                  <td>{report.grade}</td>
                  <td>{report.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className='notifications'>
          <h2>Notifications</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Parent Dashboard</p>
      </footer>
     </div>
   );
 };

export default ParentDashboard;