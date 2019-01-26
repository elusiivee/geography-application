const errorMiddleware = function(err, req, res) {
  console.log(err); // to see properties of message in our console
  res.status(422).send({ error: err.message });
};

module.exports = errorMiddleware;
