import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import LandingPage from './Component/LandingPage';
import About from './Component/About';
import Features from './Component/Features';
import Register from './Component/Register';
import Login from './Component/Login';
import StudentDashboard from './Component/StudentDashboard';
import Profile from './Component/Profile';
import TeachersDashboard from './Pages/TeachersDashbard';
import CreateCurriculum from './Components/CreateCurriculum';
import UniversityEducationCurriculum from './Components/UniversityEducationCurriculum';
import SecondaryEducationCurriculum from './Components/SecondaryEducationCurriculum';
import CurriculumPage from './Pages/CurriculumPage';
import LessonPlan from './Components/LessonPlan';
import AvailableCurriculum from './Components/AvailableCurriculum';
import ParentDashboard from './Component/ParentDashboard';
import Settings from './Component/Settings';
import ProgressReport from './Component/ProgressReport';

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
                <Route path="/parent/dashboard" element={<ParentDashboard />}/>
                <Route path="/create-curriculum" element={<CreateCurriculum />} />
                <Route path='/universityCurriculum' element={<UniversityEducationCurriculum />} />
                <Route path='/secondaryCurriculum' element={<SecondaryEducationCurriculum />} />
                <Route path="/curriculumPage" element={<CurriculumPage />} />
                <Route path='/lessonPlan' element={<LessonPlan />} />
                <Route path='AvaialableCurriculum' element={<AvailableCurriculum />} />
                <Route path='/settings' element={<Settings />}/>
                <Route path='/progress-report' element={<ProgressReport />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;