const express = require('express');
const router = express.Router();
const Question = require('../model/question');

const serverError = function() {
  console.log('Server not work!');
  res.status(500).send('Server not work!');
};

// get a list of questions from the db
router.get('/questions/all', function(req, res, next) {
  Question.find()
    .then(function(questions) {
      console.log('Show all questions.');
      res.json(questions);
    })
    .catch(serverError);
});

// get a specific amount of questions from the db
router.get('/questions', function(req, res, next) {
  Question.find()
    .then(function(questions) {
      var number = req.query.number;
      console.log('Show '+number+' questions.');
      var result = questions.slice(0,number);
      res.json(result);
    })
    .catch(serverError);
});
// get a single question from the db
router.get('/questions/:id', function(req, res, next) {
  Question.findById({ _id: req.params.id }, req.body)
    .then(function(question) {
      console.log('Show one question');
      res.json(question);
    })
    .catch(serverError);
});

module.exports = router;