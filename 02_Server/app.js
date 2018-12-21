const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://admin:admin@localhost:27017/geographydb?authSource=admin');
mongoose.Promise = global.Promise;

//set up static files
app.use(express.static('public'));

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routers/api'));

// error handling middleware
app.use(function(err, req, res, next) {
    console.log(err); // to see properties of message in our console
    res.status(422).send({ error: err.message });
});

// listen for requests
app.listen(process.env.port || 4000, function() {
    console.log('now listening for requests');
});