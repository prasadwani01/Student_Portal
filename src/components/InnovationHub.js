import React from 'react';
import './InnovationHub.css'; // Import the CSS file for styling

const hackathonsData = [
    {
        title: "CodeSprint 2024",
        description: "A 48-hour coding marathon for developers to showcase their skills and build innovative projects.",
        image: "pixlr-image-generator-8d2ebf06-acf4-4e96-b017-d39eb4575fd0 (1).png",
        date: "October 5-7, 2024"
    },
    {
        title: "AI Revolution",
        description: "Compete to create AI-powered solutions to real-world problems in this 36-hour hackathon.",
        image: "https://via.placeholder.com/300x200?text=AI+Revolution",
        date: "November 12-14, 2024"
    },
    {
        title: "CyberHack",
        description: "An event focused on cybersecurity, challenging participants to secure systems and prevent attacks.",
        image: "https://via.placeholder.com/300x200?text=CyberHack",
        date: "December 1-3, 2024"
    },
    {
        title: "Web Dev Challenge",
        description: "A hackathon dedicated to building modern web applications with cutting-edge technologies.",
        image: "https://via.placeholder.com/300x200?text=Web+Dev+Challenge",
        date: "January 18-20, 2025"
    },
    // New hackathons
    {
        title: "GreenTech Challenge",
        description: "Develop sustainable solutions and green technology in this eco-friendly hackathon.",
        image: "https://via.placeholder.com/300x200?text=GreenTech",
        date: "March 5-7, 2025"
    },
    {
        title: "HealthTech Hackathon",
        description: "Innovate in the healthcare sector with new health-focused technologies in this challenge.",
        image: "https://via.placeholder.com/300x200?text=HealthTech",
        date: "April 10-12, 2025"
    }
];


const InnovationHub = () => {
    return (
        <div className="innovation-container">
            <h2>Upcoming Hackathons</h2>
            <div className="hackathon-grid">
                {hackathonsData.map((hackathon, index) => (
                    <div className="hackathon-card" key={index}>
                        <img src={hackathon.image} alt={hackathon.title} />
                        <div className="hackathon-content">
                            <h3>{hackathon.title}</h3>
                            <p>{hackathon.description}</p>
                            <span className="hackathon-date">{hackathon.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InnovationHub;
