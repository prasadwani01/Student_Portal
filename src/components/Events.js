import React from 'react';
import './Events.css'; // Import the CSS file for styling

const eventsData = [
    {
        title: "Annual Science Fair",
        description: "Join us for the annual science fair showcasing innovative projects by students.",
        date: "October 15, 2024",
    },
    {
        title: "Sports Day",
        description: "A full day of sports activities and competitions between different departments.",
        date: "November 10, 2024",
    },
    {
        title: "Tech Innovation Challenge",
        description: "Showcase your tech skills and innovative ideas in this exciting challenge.",
        date: "December 5, 2024",
    },
    {
        title: "Cultural Fest",
        description: "Celebrate the diversity of cultures with performances, food stalls, and more.",
        date: "January 20, 2025",
    },
    // New events
    {
        title: "Music Fest",
        description: "Enjoy live music performances from various student bands and artists.",
        date: "February 14, 2025",
    },
    {
        title: "Coding Marathon",
        description: "A 12-hour coding event where students build projects in teams.",
        date: "March 12, 2025",
    }
];


const Events = () => {
    return (
        <div className="events-container">
            <h2>Upcoming Events</h2>
            <div className="events-grid">
                {eventsData.map((event, index) => (
                    <div className="event-card" key={index}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <span className="event-date">{event.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
