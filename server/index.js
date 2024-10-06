import express from 'express'; // Import express
import dotenv from 'dotenv'; // Import dotenv for env variables
import cors from 'cors'; // Import CORS middleware
import './config/db.js'; // Import DB configuration
import { Router } from './routes/routes.js'; // Import routes

const app = express(); // Create express app
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS
dotenv.config({path: './config/.env'}); // Load env variables

app.use('/contactmsyt', Router); // Use routes under '/contactmsyt'

app.listen(process.env.PORT, () => { // Start server on specified port
    console.log('Server is running on 3000'); // Log server start message
});
