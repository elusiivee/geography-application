const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const router = require('./routers/api');
const swaggerDocument = require('./swagger.json');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://admin:admin@geography-db:27017/geographydb?authSource=admin');
mongoose.Promise = global.Promise;

//set up static files
app.use(express.static('public'));

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', router);

// error handling middleware
app.use(function(err, req, res) {
  console.log(err); // to see properties of message in our console
  res.status(422).send({ error: err.message });
});
// add swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

// listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('Server started and wait requests');
});