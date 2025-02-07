import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import './TeachersDashboard.css';
import CreateCurriculum from '../Components/CreateCurriculum';
import LessonPlan from '../Components/LessonPlan';
import UniversityEducationCurriculum from '../Components/UniversityEducationCurriculum';
import AvailableCurriculum from '../Components/AvailableCurriculum';
import ProgressReport from '../Component/ProgressReport';

const TeachersDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleCurriculumChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to the Teachers Dashboard</h1>
      </div>
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
                <option value="downloadCurriculum">Download Curriculum</option>
              </select>
            </label>
          </li>
          <li>
            <label>
              Lesson Plan
              <select onChange={handleCurriculumChange}>
                <option value="">Select an option</option>
                <option value="createLesson">Create Lesson Plan</option>
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
              <select onChange={handleCurriculumChange}>
                <option value="assessment">Assessment Report</option>
                <option value="progress-report">Student Progress Report</option>
              </select>
            </label>
          </li>
          <li>About</li>
        </ul>
        <div>
        
          {/* Register <NewRegister /> */}
          {/* <UniversityEducationCurriculum /> */}
        </div>
        <hr />
      </div>
      <div className="dashboard-main">
        {selectedOption === 'create' && (
          <div className="form-container">
            <h2>Create Curriculum</h2>
            <CreateCurriculum />
          </div>
        )}
        {selectedOption === "createLesson" && (
          <div className="form-container">
            <h2>Create Lesson Plan</h2>
            <LessonPlan />
          </div>
        )}
        {selectedOption === "downloadCurriculum" && (
          <div className="downloads">
            <AvailableCurriculum />
          </div>
        )}
        {selectedOption === "progress-report" && (
          <div className='reports'>
            <h2>Progress Reports</h2>
            <ProgressReport />
          </div>
        )}
      </div>
      <div className="additional-section">
        <h2>Stay Organized and Efficient</h2>
        <p>
          Our dashboard helps you manage your curriculum, lesson plans, and reports all in one place.
          Stay on top of your teaching tasks with ease!
        </p>
      </div>
      <div className='back-home'>
        <Link to="/">
          <AiOutlineArrowLeft size={24} style={{ marginBottom: '10px' }} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default TeachersDashboard;