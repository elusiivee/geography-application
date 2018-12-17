const express = require('express');
const router = express.Router();
const Question = require('../model/question');

// get a list of ninjas from the db
router.get('/questions', function(req, res, next) {
    Question.find({}).then(function(questions) {
        console.log(questions);
        res.send(questions.toString);
    }).catch(
        res.send("Not work!")
    );
});

module.exports = router;