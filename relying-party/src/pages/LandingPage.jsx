import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import Events from '../components/Events';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export default function LandingPage() {
  // ------------ RETRIEVE EVENTS ------------------
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events when component mounts
    fetch('https://localhost:3003/events', {
      credentials: 'include',
    })
        .then(response => response.json())
        .then(data => {
            setEvents(data); // Update state with fetched events
        })
        .catch(error => {
            console.error("There was an error fetching the events!", error);
        });
  }, []);

  const [event1, event2] = events;
  // -----------------------------------------------

  const imagePath = '/volunteerimage.jpg'

  return (
    <div id='landing-page'>
      <h2>New Events</h2>
            {event1 && (
        <Events 
          header={event1.organizerName} 
          paragraph={event1.eventDescription} 
          location={event1.location}
          category={event1.eventType}
          startDateTime={event1.startDateTime} 
          endDateTime={event1.endDateTime}
        />
      )}
      {event2 && (
        <Events 
          header={event2.organizerName} 
          paragraph={event2.eventDescription} 
          location={event1.location}
          category={event1.eventType}
          startDateTime={event1.startDateTime} 
          endDateTime={event1.endDateTime}
        />
      )}
      <h2>Today's Inspiration</h2>
      <div className='image-container'>
        <img className='image' src={imagePath} alt="Image of a group of volunteers" />
        <h3 className='text-over-image'>Example volunteer story title</h3>
        <div className='read-more-container'>
          <p className='read-more'>READ MORE</p>
          <a href="" className='arrow-icon'><ArrowCircleRightOutlinedIcon/></a>
        </div>
      </div>
    </div>
  );
}

