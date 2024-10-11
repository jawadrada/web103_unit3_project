import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventsByLocationId } from '../services/EventsAPI';
import Event from '../components/Event';
import '../css/LocationEvents.css';

const LocationEvents = () => {
  const { id } = useParams(); // Get location ID from the URL
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getEventsByLocationId(id); // Use the location ID
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [id]);

  return (
    <div className="location-events">
      <main>
        {events && events.length > 0 ? (
          events.map((event) => (
            <Event
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              image={event.image}
            />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i> No events
            scheduled at this location yet!
          </h2>
        )}
      </main>
    </div>
  );
};

export default LocationEvents;

