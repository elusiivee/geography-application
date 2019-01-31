import React, { Component } from 'react';
import Questionnaire from './Questionnaire';
import questions from '../questions.json';

export default class App extends Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    // TODO: HTTP-запрос сюда
    this.setState({ questions });
  }

  render() {
    return <Questionnaire questions={questions} />;
  }
}
