import React, { useState } from 'react';
import './TeachersDashboard.css';
import CreateCurriculum from '../Components/CreateCurriculum';

const TeachersDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleCurriculumChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h1>Welcome to the Teachers Dashboard</h1>
      </div>

      {/* Menu */}
      <div className="dashboard-menu">
        <ul className="menu-items">
          <li>
            <label>
              Curriculum
              <select onChange={handleCurriculumChange}>
                <option value="">Select an option</option>
                <option value="create">Create Curriculum</option>
                <option value="edit">Edit Curriculum</option>
                <option value="delete">Delete Curriculum</option>
                <option value="view">View Curriculum</option>
                <option value="download">Download Curriculum</option>
              </select>
            </label>
          </li>
          <li>
            <label>
              Lesson Plan
              <select>
                <option value="create">Create Lesson Plan</option>
                <option value="edit">Edit Lesson Plan</option>
                <option value="delete">Delete Lesson Plan</option>
                <option value="view">View Lesson Plan</option>
                <option value="download">Download Lesson Plan</option>
              </select>
            </label>
          </li>
          <li>
            <label>
              Report
              <select>
                <option value="assessment">Assessment Report</option>
                <option value="progress">Student Progress Report</option>
              </select>
            </label>
          </li>
          <li>About</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        {selectedOption === 'create' && (
          <div className="form-container">
            <h2>Create Curriculum</h2>
            <CreateCurriculum />
          </div>
        )}
      </div>

      {/* Additional Design Section */}
      <div className="additional-section">
        <h2>Stay Organized and Efficient</h2>
        <p>
          Our dashboard helps you manage your curriculum, lesson plans, and reports all in one place.
          Stay on top of your teaching tasks with ease!
        </p>
      </div>
    </div>
  );
};

export default TeachersDashboard;