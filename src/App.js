import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDetail from './components/StudentDetail';
import Events from './components/Events';
import Seminar from './components/Seminar';
import InnovationHub from './components/InnovationHub';
import Sidebar from './components/Sidebar';
import Login from './components/Login'; // Import Login Component
import './components/Sidebar.css';

function App() {
    return (
        <Router>
            <div>
                <Sidebar />
                <div className="main-content">
                    <header>
                        <h1>STUDENT PERFORMANCE PORTAL</h1>
                    </header>
                    <Routes>
                        <Route path="/" element={<Login />} /> {/* Default route for Login */}
                        <Route path="/student-details" element={<StudentDetail />} />
                        <Route path="/odds/events" element={<Events />} />
                        <Route path="/odds/seminars" element={<Seminar />} />
                        <Route path="/odds/innovation-hub" element={<InnovationHub />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
