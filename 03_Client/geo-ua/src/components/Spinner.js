import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  backdropRoot: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  spinnerContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Spinner = ({ classes }) => (
  <>
    <Backdrop open classes={{ root: classes.backdropRoot }} />
    <div className={classes.spinnerContainer}>
      <CircularProgress className={classes.spinner} size={80} />
    </div>
  </>
);

export default withStyles(styles)(Spinner);
