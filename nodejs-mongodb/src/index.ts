import dotenv from 'dotenv';
import { createServer, Server } from 'http';
import express, { Express } from 'express';
import router from './routes';

// Initialize environment variables
dotenv.config();

// Create an Express application instance
const app: Express = express();

// Default port
const PORT = process.env.PORT || 9000;

// API routes
app.use('/v1/api', router);

// Create an HTTP server using the Express app
const server: Server = createServer(app);

// Start the server and listen on the defined port
server.listen(PORT, () => {
    console.log(`Server listening on the port:${PORT}`);
});
