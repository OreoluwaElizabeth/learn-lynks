import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import LandingPage from './Component/LandingPage';
import About from './Component/About';
import Features from './Component/Features';
import Register from './Component/Register';
import Login from './Pages/Login';
import StudentDashboard from './Component/StudentDashboard';
import Profile from './Component/Profile';
import TeachersDashboard from './Pages/TeachersDashbard';
import CreateCurriculum from './Components/CreateCurriculum';
import CurriculumPage from './Pages/CurriculumPage'
import LessonPlan from './Components/LessonPlan';
import AvailableCurriculum from './Components/AvailableCurriculum';
import UniversityEducationCurriculum from './Components/UniversityEducationCurriculum';
import SecondaryEducationCurriculum from './Components/SecondaryEducationCurriculum';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/student/dashboard" element={<StudentDashboard />}/>
                <Route path="/student/profile" element={<Profile />} />
                <Route path="/teacher/dashboard" element={<TeachersDashboard />} />
                <Route path="/create-curriculum" element={<CreateCurriculum />} />
                {/* <Route path="/register" element={<NewRegister />} /> */}
                <Route path="/curriculumPage" element={<CurriculumPage />} />
                <Route path='/lessonPlan' element={<LessonPlan />} />
                <Route path='/AvailableCurriculum' element={<AvailableCurriculum />} />
                <Route path='/universityCurriculum' element={<UniversityEducationCurriculum />} />
                <Route path='/secondaryCurriculum' element={<SecondaryEducationCurriculum />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;