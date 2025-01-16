import React, { useState } from 'react';
import './TeachersDashboard.css';
import CreateCurriculum from '../Components/CreateCurriculum';
import NewRegister from './NewRegister';
import LessonPlan from '../Components/LessonPlan';
// import Login from './Login';

const TeachersDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleCurriculumChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="menu">
        <div className="teach">Welcome to the Teachers Dashboard</div>
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
        <div>
        {/* Register <NewRegister /> */}
        </div>
        <hr />

        {/* Conditionally Render CreateCurriculum */}
        {selectedOption === 'create' && (
          <div className="form-container">
            <h2>Create Curriculum</h2>
            <CreateCurriculum />
          </div>
        )}
        
      </div>
      <LessonPlan />
      {/* <NewRegister />
      <Login /> */}
    </div>
  );
};

export default TeachersDashboard;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './TeachersDashboard.css';

// const TeachersDashboard = () => {
//   const navigate = useNavigate();

//   const handleCurriculumChange = (event) => {
//     const value = event.target.value;
//     if (value === "create") {
//       navigate('/create-curriculum');
//     }
//     // Add handling for other options like "edit", "delete", etc., if needed.
//   };

//   return (
//     <div>
//       <div className="menu">
//         <div className="teach">Welcome to the Teachers Dashboard</div>
//         <ul className="menu-items">
//           <li>
//             <label>
//               Curriculum
//               <select onChange={handleCurriculumChange}>
//                 <option value="">Select an option</option>
//                 <option value="create">Create Curriculum</option>
//                 <option value="edit">Edit Curriculum</option>
//                 <option value="delete">Delete Curriculum</option>
//                 <option value="view">View Curriculum</option>
//                 <option value="download">Download Curriculum</option>
//               </select>
//             </label>
//           </li>
//           <li>
//             <label>
//               Lesson Plan
//               <select>
//                 <option value="create">Create Lesson Plan</option>
//                 <option value="edit">Edit Lesson Plan</option>
//                 <option value="delete">Delete Lesson Plan</option>
//                 <option value="view">View Lesson Plan</option>
//                 <option value="download">Download Lesson Plan</option>
//               </select>
//             </label>
//           </li>
//           <li>
//             <label>
//               Report
//               <select>
//                 <option value="assessment">Assessment Report</option>
//                 <option value="progress">Student Progress Report</option>
//               </select>
//             </label>
//           </li>
//           <li>About</li>
//         </ul>
//         <hr />
//       </div>
//     </div>
//   );
// };

// export default TeachersDashboard;
