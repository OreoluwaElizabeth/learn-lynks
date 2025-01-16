import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeachersDashboard from './Pages/TeachersDashbard';
import CreateCurriculum from './Components/CreateCurriculum';
import NewRegister from './Pages/NewRegister';
import CurriculumPage from './Pages/CurriculumPage';
import LessonPlan from './Components/LessonPlan';
import AvailableCurriculum from './Components/AvailableCurriculum';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeachersDashboard />} />
        <Route path="/create-curriculum" element={<CreateCurriculum />} />
        <Route path="/register" element={<NewRegister />} />
        <Route path="/curriculumPage" element={<CurriculumPage />} />
        <Route path='/lessonPlan' element={<LessonPlan />} />
        <Route path='AvaialableCurriculum' element={<AvailableCurriculum />} />
      </Routes>
    </Router>
  );
};

export default App;