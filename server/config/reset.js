import { pool } from './database.js';
import locations from '../data/locations.js';  // Adjust path if necessary
import events from '../data/events.js';        // Adjust path if necessary

const createTables = async (client) => {
    try {

        // Drop Events and Locations tables if they exist
        await client.query(`DROP TABLE IF EXISTS events;`);
        await client.query(`DROP TABLE IF EXISTS locations;`);
        
      // Create Locations table
      await client.query(`
        CREATE TABLE IF NOT EXISTS locations (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          address VARCHAR(255) NOT NULL,
          city VARCHAR(100) NOT NULL,
          state VARCHAR(2) NOT NULL,
          zip VARCHAR(10) NOT NULL,
          image TEXT
        );
      `);
  
      // Create Events table with remaining fields
      await client.query(`
        CREATE TABLE IF NOT EXISTS events (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          date DATE NOT NULL,
          time INTEGER NOT NULL,
          location INTEGER REFERENCES locations(id),
          image TEXT,
          remaining_years INTEGER,
          remaining_months INTEGER,
          remaining_days INTEGER
        );
      `);
  
      console.log("Tables created successfully");
    } catch (error) {
      console.error("Error creating tables", error);
    }
  };
  
  

  const seedData = async (client) => {
    try {
      // Insert locations data
      for (const location of locations) {
        await client.query(
          `INSERT INTO locations (id, name, address, city, state, zip, image)
           VALUES ($1, $2, $3, $4, $5, $6, $7)
           ON CONFLICT (id) DO NOTHING;`,
          [location.id, location.name, location.address, location.city, location.state, location.zip, location.image]
        );
      }
  
      // Insert events data with remaining fields
      for (const event of events) {
        await client.query(
          `INSERT INTO events (id, title, date, time, location, image, remaining_years, remaining_months, remaining_days)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
           ON CONFLICT (id) DO NOTHING;`,
          [
            event.id,
            event.title,
            event.date,
            event.time,
            event.location,
            event.image,
            event.remaining.years,  // Insert remaining years
            event.remaining.months, // Insert remaining months
            event.remaining.days    // Insert remaining days
          ]
        );
      }
  
      console.log("Seeding completed successfully");
    } catch (error) {
      console.error("Error seeding data:", error);
    }
  };
  


// Main function to handle table creation and data seeding
const main = async () => {
    const client = await pool.connect();
    try {
      await createTables(client);
      await seedData(client);
    } catch (error) {
      console.error("Error in main function:", error);
    } finally {
      client.release();  // Release the client back to the pool
      pool.end();  // End the pool connection once everything is done
    }
  };
  

main();

