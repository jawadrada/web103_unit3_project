import { pool } from '../config/database.js'; // Import the pool from your database setup

// Function to get all locations from the database
export const getAllLocations = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM locations;'); // Fetch all locations
    res.status(200).json(result.rows); // Send back the rows as JSON
  } catch (error) {
    console.error('Error getting locations:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Send an error response
  }
};