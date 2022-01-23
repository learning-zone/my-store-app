import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  pageHeader: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '300',
    fontSize: '30px',
    color: 'rgba(0, 0, 0, 0.54)',
    display: 'inline-block',
    marginBottom: '15px',
    textShadow: '0 1px #fff',
  },
});

class API extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <header className={classes.pageHeader}>APIs</header>
        <hr/>
      </>
    );
  }
}

API.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(API);
