import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './student.css'; // Import the CSS file

const StudentDashboard = () => {
  const [learningMaterials, setLearningMaterials] = useState([]);
  const [progressReport, setProgressReport] = useState('');

  const handleGetProgressReport = async () => {
    try {
      const response = await fetch('/api/student/progress-report');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProgressReport(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetLearningMaterials = async () => {
    try {
      const response = await fetch('http://localhost:8080/download');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setLearningMaterials(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="student-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Welcome to Your Student Dashboard</h1>
        <p>Stay organized and track your progress effortlessly.</p>
      </header>

      {/* Navigation */}
      <nav className="dashboard-nav">
        <ul>
          <li>
            <Link to="/student/profile" className="nav-link">
              <span className="icon">👤</span>
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/student/grades" className="nav-link">
              <span className="icon">📊</span>
              <span>Grades</span>
            </Link>
          </li>
          <li>
            <Link to="/progress-report" className="nav-link">
              <span className="icon">📈</span>
              <span>Progress Report</span>
            </Link>
          </li>
          {/* <li>
            <button className="nav-button" onClick={handleGetProgressReport}>
              <span className="icon">📈</span>
              <span>Progress Report</span>
            </button>
          </li> */}
          <li>
            <button className="nav-button" onClick={handleGetLearningMaterials}>
              <span className="icon">📚</span>
              <span>Learning Materials</span>
            </button>
          </li>
          <li>
            <Link to="/personalized-learning" className="nav-link">
              <span className="icon">📊</span>
              <span>Personalized Learning</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Progress Report Section */}
        {progressReport && (
          <section className="progress-section">
            <h2>📊 Progress Report</h2>
            <div className="progress-card">
              <p>{progressReport}</p>
            </div>
          </section>
        )}

        {/* Learning Materials Section */}
        {learningMaterials.length > 0 && (
          <section className="materials-section">
            <h2>📚 Learning Materials</h2>
            <div className="materials-grid">
              {learningMaterials.map((material, index) => (
                <div key={index} className="material-card">
                  <span className="material-icon">📄</span>
                  <p>{material}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;