import mongoose from "mongoose"; // Import mongoose for MongoDB interaction
import dotenv from "dotenv"; // Import dotenv for environment variable management
dotenv.config({ path: "./config/.env" }); // Load environment variables from .env file

const Connection = async () => { // Define asynchronous function to connect to database
    try {
        await mongoose.connect(process.env.URI); // Connect to MongoDB using URI from environment variable
        console.log("Database connected successfully"); // Log success message
    } catch (err) {
        console.log("Error:" + err.message);     // Log error message if connection fails
    }
}

Connection();                                    // Call the Connection function to establish database connection
