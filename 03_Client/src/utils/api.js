import axios from 'axios';

const mapper = questions =>
    questions.map(({ _id: id, ...props }) => ({ id, ...props }));

export const fetchQuesions = amount =>
    axios
    .get(`http://localhost:4000/questions?number=${amount}`)
    .then(({ data }) => mapper(data))
    .catch(console.log);