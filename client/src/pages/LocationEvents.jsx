import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams to get locationId
import { getEventsByLocationId } from '../services/EventsAPI';  // Import your service function
import Event from '../components/Event';
import '../css/LocationEvents.css';

const LocationEvents = () => {
  const { locationId } = useParams();  // Get locationId from route params
  const [location, setLocation] = useState({});
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchLocationEvents = async () => {
      try {
        const eventsData = await getEventsByLocationId(locationId);  // Fetch events for this location
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchLocationEvents();
  }, [locationId]);  // Fetch events when locationId changes

  return (
    <div className='location-events'>
      <header>
        <div className='location-image'>
          {/* Replace with your image logic */}
          <img src={location.image} alt={location.name} />
        </div>

        <div className='location-info'>
          <h2>{location.name}</h2>
          <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
        </div>
      </header>

      <main>
        {
          events.length > 0 ? events.map(event => (
            <Event
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              image={event.image}
            />
          )) : <h2>No events scheduled at this location yet!</h2>
        }
      </main>
    </div>
  );
};

export default LocationEvents;


