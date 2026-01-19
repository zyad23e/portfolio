import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'June 2024 - January 2025',
      title: 'Revature - Java Intern',
      description: [
        'Completed an intensive backend-focused training program using <b>Java</b> and <b>Spring Boot</b>, emphasizing object-oriented design, clean code, and application architecture',
        'Developed RESTful APIs and backend services, implementing CRUD operations and handling request/response workflows',
        'Worked with relational databases using <b>SQL</b> and basic data modeling concepts, integrating persistence layers into Spring-based applications',
        'Used <b>Git/GitHub</b> for version control and collaborated in an agile training environment with code reviews, technical assessments, and team-based projects'
      ],
      expanded: false,
    }
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
