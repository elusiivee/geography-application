import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Questionnaire from '../Questionnaire/Questionnaire';

import questions from '../../questions.json';

export default class App extends Component {
  state = {};
  render() {
    return <Questionnaire questions={questions} />;
  }
}
