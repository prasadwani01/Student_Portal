import React from 'react';
import './Seminar.css'; // Import the CSS file for styling

const seminarsData = [
    {
        title: "Data Science and Machine Learning",
        description: "Learn the basics of data science and machine learning from industry experts.",
        date: "September 25, 2024"
    },
    {
        title: "Blockchain Technology",
        description: "A deep dive into blockchain technology and its applications in various industries.",
        date: "October 10, 2024"
    },
    {
        title: "Cybersecurity Essentials",
        description: "An essential seminar on the latest in cybersecurity threats and defense mechanisms.",
        date: "November 3, 2024"
    },
    {
        title: "Artificial Intelligence in Healthcare",
        description: "Explore how AI is transforming the healthcare industry in this expert-led seminar.",
        date: "December 15, 2024"
    },
    // New seminars
    {
        title: "Cloud Computing",
        description: "Understand the impact of cloud computing in modern IT infrastructure.",
        date: "January 20, 2025"
    },
    {
        title: "Robotics in the 21st Century",
        description: "An interactive seminar on the role of robotics in automation and manufacturing.",
        date: "February 5, 2025"
    }
];


const Seminar = () => {
    return (
        <div className="seminars-container">
            <h2>Upcoming Seminars</h2>
            <div className="seminar-timeline">
                {seminarsData.map((seminar, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-date">{seminar.date}</div>
                        <div className="timeline-content">
                            <h3>{seminar.title}</h3>
                            <p>{seminar.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Seminar;
