import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Ensure you're importing the styling

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => setOpen(!open);

    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/student-details">Student Details</Link></li> {/* New Button for Student Details */}
                <li onClick={toggleDropdown} className="dropdown-header">
                    Odds ▼
                </li>
                {open && (
                    <ul className="dropdown-content">
                        <li><Link to="/odds/events">Events</Link></li>
                        <li><Link to="/odds/seminars">Seminars</Link></li>
                        <li><Link to="/odds/innovation-hub">Innovation Hub</Link></li>
                    </ul>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
