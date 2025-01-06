import React, { useState } from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import './StudentDetail.css';  // Import the CSS file for animation

const StudentDetail = () => {
    const [studentId, setStudentId] = useState('');
    const [studentData, setStudentData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showDetails, setShowDetails] = useState(false); // For animation, initially false

    const fetchStudentData = async () => {
        setLoading(true);
        setError(null);
        setShowDetails(false); // Reset the animation state

        try {
            const response = await axios.get(`http://localhost:5000/student/${studentId}`);
            setStudentData(response.data.student_data);

            // Once the data is fetched, stop loading and show the details
            setLoading(false);
            setShowDetails(true); // Trigger the animation after data is loaded
        } catch (err) {
            setError('Student not found or error fetching student data');
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Student Details</h1>
            <input
                type="text"
                placeholder="Enter Student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
            />
            <button onClick={fetchStudentData}>Fetch Student Data</button>

            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">{error}</div>}
            
            {/* CSSTransition for Animation, only triggered when data is available */}
            <CSSTransition
                in={showDetails && !loading}  // Only show the animation when loading is false
                timeout={1000}  // Animation duration (1 second)
                classNames="fade"
                unmountOnExit
            >
                <div className="card">
                    {studentData && (
                        <>
                            <h2>Details for Student: {studentData['Student Name']}</h2>
                            <p><span className="label">Elective:</span> {studentData['Elective Name']}</p>
                            <h3>Subjects</h3>
                            <ul>
                                {studentData.subjects.map((subject, index) => (
                                    <li key={index}>
                                        <strong>{subject.subject}</strong>: Marks - {subject.marks}, Attendance - {subject.attendance}%
                                    </li>
                                ))}
                            </ul>
                            <h3>Personalized Study Tips</h3>
                            <p>{studentData.tips}</p>
                        </>
                    )}
                </div>
            </CSSTransition>
        </div>
    );
};

export default StudentDetail;
