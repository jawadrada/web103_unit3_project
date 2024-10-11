import express from 'express';
import { getAllLocations } from '../controllers/locationsController.js'; // Import the location controller

const router = express.Router();

// Define a route to get all locations
router.get('/locations', getAllLocations);


export default router;
