import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import LandingPage from './Component/LandingPage';
import About from './Component/About';
import Features from './Component/Features';
import Register from './Component/Register';
import Login from './Component/Login';
import StudentDashboard from './Component/StudentDashboard';
import TeachersDashboard from './Pages/TeachersDashbard'
import CreateCurriculum from './Component/CreateCurriculum';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/student/dashboard" element={<StudentDashboard />}/>
                <Route path="/teachers/dashboard" element={<TeachersDashboard />}/>
                <Route path="/CreateCurriculum" element={<CreateCurriculum />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;