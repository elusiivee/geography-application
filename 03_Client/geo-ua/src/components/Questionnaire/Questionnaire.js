import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Answers from './Answers';

const styles = theme => ({
  root: {
    width: '800px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

const getSteps = data => data.map(({ id, question }) => ({ id, question }));

const getStepContent = (data, stepIndex) => data[stepIndex].answers;

class Questionnaire extends React.Component {
  state = {
    activeStep: 0,
    selectedAnswerIdx: null,
    steps: getSteps(this.props.questions),
  };

  handleAnswerSelect = idx => {
    this.setState({ selectedAnswerIdx: idx });
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
      selectedAnswerIdx: null,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep, selectedAnswerIdx, steps } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map(({ id, question }, index) => (
            <Step key={id}>
              <StepLabel>{question}</StepLabel>
              <StepContent>
                <Answers
                  items={getStepContent(this.props.questions, index)}
                  value={selectedAnswerIdx}
                  onSelect={this.handleAnswerSelect}
                />
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={selectedAnswerIdx === null}
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

Questionnaire.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Questionnaire);
