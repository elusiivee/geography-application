const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routers/api');


// set up express app
const app = express();

// connect to mongodb geography-db
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

app.use(function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});


// listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('Server started and wait requests');
});