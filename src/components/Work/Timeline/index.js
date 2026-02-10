import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'June 2024 - January 2025',
      title: 'Revature - Java Software Engineer Intern',
      description: [
        'Completed an intensive software engineering program focused on building full-stack web applications using Java, Spring Boot, REST APIs, and modern web technologies.',
        'Developed backend services and integrated them with user-facing components to support complete application workflows.',
        'Built and tested RESTful APIs supporting CRUD operations, authentication, and data validation.',
        'Designed and integrated relational databases using SQL and Spring Data JPA.',
        'Used Git/GitHub for version control and collaborated in Agile team environments through code reviews, sprint planning, and technical assessments.'
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
