const express = require('express');
const router = express.Router();
const Question = require('../model/question');

const serverError = () => {
  console.log('Server not work!');
  res.status(500).send('Server not work!');
};

// get a list of questions from the db
router.get('/questions/all', (req, res) => {
  Question.find()
    .then((questions) => {
      console.log('Show all questions.');
      res.json(questions);
    }).catch(serverError);
});

// get a specific amount of questions from the db
router.get('/questions', (req, res) => {
  Question.find()
    .then((questions) => {
      let number = req.query.number;
      console.log('Show ' + number + ' questions.');
      let result = questions.slice(0, number);
      res.json(result);
    }).catch(serverError);
});
// get a single question from the db
router.get('/questions/:id', (req, res) => {
  Question.findById({ _id: req.params.id }, req.body)
    .then((question) => {
      console.log('Show one question');
      res.json(question);
    }).catch(serverError);
});

router.post('/questions', (req, res) => {
  console.log('Creae new question ' + req.body);
  Question.create(req.body).then((question) => {
    res.json(question);
  }).catch(serverError);
});


router.put('/qustions/:id', (req, res) => {
  Question.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      Question.findOne({ _id: req.params.id }).then((question) => {
        console.log('Updated question: ' + question.toString());
        res.json(question);
      });
    }).catch(serverError);
});

router.delete('/questions/:id', (req, res) => {
  Question.findByIdAndRemove({ _id: req.params.id }).then((question) => {
    console.log('Delete ' + question.toString());
    res.json(question);
  }).catch(serverError);
});

module.exports = router;