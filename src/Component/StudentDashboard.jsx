import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './student.css';

const StudentDashboard = () => {
    const [learningMaterials, setLearningMaterials] = useState([]);
    const [grades, setGrades] = useState([]);
    const [progressReport, setProgressReport] = useState([]);

    const navigate = useNavigate();
    
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
          const response = await fetch(`${'http://localhost:8080'}/download`);
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
        <div className='dashboard'>
            <h1>Student Dashboard</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/student/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/student/grades">Grades</Link>
                    </li>
                    <li>
                        <button onClick={handleGetProgressReport}>Progress Report</button>
                    </li>
                    <li>
                        <button onClick={handleGetLearningMaterials}>Learning Materials</button>
                    </li>
                </ul>
            </nav>
            <main>
                {progressReport && (
                    <section>
                        <h2>Progress Report</h2>
                        <p>{progressReport}</p>
                    </section>
                )}
                {learningMaterials && (
                    <section>
                        <h2>Learning Materials</h2>
                        <ul>
                            {learningMaterials.map((material, index) => (
                                <li key={index}>{material}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </main>
        </div>
    );
};

export default StudentDashboard;