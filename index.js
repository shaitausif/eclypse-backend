// api/index.js
import dotenv from 'dotenv';

import { app } from './app.js'; // Correctly import the named export 'app'
import connectDB from './src/db/index.js'

// Load environment variables
dotenv.config();

// Connect to MongoDB


// Call connectDB to establish connection when the function initializes
connectDB().then(() => {
    if(process.env.NODE_ENV !== "production"){
        app.listen(process.env.PORT || 8080, () => {
            console.log(`Server is running at http://localhost:${process.env.PORT}`)
        })
    }
});

// Conditional listening for local development
// This block should NOT be present if you are deploying to Netlify Functions.
// Netlify handles the listening internally.
/*
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
*/

// IMPORTANT: Export the app as the DEFAULT export for Netlify Functions
// This is how Netlify finds your Express application to handle requests.
export default app;