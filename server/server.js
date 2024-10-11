import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import dotenv from 'dotenv'; // Import dotenv
import eventsRoutes from './routes/eventsRoutes.js'; // Import the events router
import locationsRoutes from './routes/locationsRoutes.js'; // Import the locations router

// Load environment variables
dotenv.config(); 

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve favicon based on environment
if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'party.png')));
} else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'party.png')));
    app.use(express.static('public'));
}

// Specify the API paths for the server to use
app.use('/api', eventsRoutes); // Use events routes under /api
app.use('/api', locationsRoutes); // Use locations routes under /api

// For production, serve the frontend app
if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    );
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
