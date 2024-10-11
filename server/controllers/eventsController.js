import { pool } from '../config/database.js'; // Import the pool from your database setup

// Function to get all events
export const getAllEvents = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Controller to get events by location ID
export const getEventsByLocation = async (req, res) => {
  const locationId = req.params.id;

  try {
    const result = await pool.query(
      'SELECT * FROM events WHERE location = $1',
      [locationId]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No events found for this location' });
    }

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching events by location:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


