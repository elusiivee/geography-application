const express = require('express');
const mongoose = require('mongoose');
const corsMiddleware = require('cors');
const router = require('./routers/api');
const errorMiddleware = require('./middleware/errorMiddleware');

// set up express app
const app = express();

// connect to mongodb geography-db

// TODO: вынести секреты в .env?
mongoose.connect(
  'mongodb://admin:admin@geography-db:27017/geographydb?authSource=admin',
);
mongoose.Promise = global.Promise;

/*
 * Set up middlewares
 */
app.use(express.static('public'));
app.use(express.json());
app.use(corsMiddleware());

// Initialize routes
app.use('/api', router);

// Error handling middleware
app.use(errorMiddleware);

// Listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('Server started and wait requests');
});
