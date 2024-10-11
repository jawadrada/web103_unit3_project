import express from 'express';
import { getEventsByLocation } from '../controllers/eventsController.js';

const router = express.Router();

// Route to get events by location ID
router.get('/location/:id', getEventsByLocation);

export default router;
