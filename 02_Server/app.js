const express = require('express');
const mongoose = require('mongoose');
const corsMiddleware = require('cors');
const questionRotes = require('./routes/questionRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

require('dotenv').config();

// set up express app
const app = express();

// connect to mongodb geography-db
// TODO: connect, then start server!
mongoose.connect(process.env.MONGODB_URL);
mongoose.Promise = global.Promise;

/*
 * Set up middlewares
 */
app.use(express.static('public'));
app.use(express.json());
app.use(corsMiddleware());

// Initialize routes
app.use('/questions', questionRotes);

// Error handling middleware
app.use(errorMiddleware);

// Listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('Server started and wait requests');
});
