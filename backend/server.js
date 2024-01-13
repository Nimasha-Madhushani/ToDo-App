// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/configDB'); // Import database configuration
const route = require('./routes/routes'); // Import services

const app = express();
// middlewares
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

// Connect to the database
connectDB();

// Use the services
app.use('/', route);

app.listen(port, () => {
  console.log(`App is running on Port: ${port}`);
});
