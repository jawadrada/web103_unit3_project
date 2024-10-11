// EventsAPI.jsx

const API_URL_EVENTS = '/api/events';

// Function to get all events
export const getAllEvents = async () => {
  try {
    const response = await fetch(API_URL_EVENTS);
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

// Function to get a single event by ID
export const getEventById = async (id) => {
  try {
    const response = await fetch(`${API_URL_EVENTS}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch event');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching event:', error);
  }
};

// Function to get events by location ID
export const getEventsByLocationId = async (locationId) => {
    try {
      const response = await fetch(`/api/events/location/${locationId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const events = await response.json();
      return events;
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };
  
  
  
