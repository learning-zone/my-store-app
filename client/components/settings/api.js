import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';

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
  actionButton: {
    float: 'right',
    padding: '2px',
    minWidth: '2px',
  },
  actionIcon: {
    fontSize: '40px !important',
    float: 'right',
  },
});

class API extends Component {
  delete(e) {
    e.preventDefault();
    console.log('Delete Item');
    //this.props.actions.logout();
  }
  add(e) {
    e.preventDefault();
    console.log('Add Item');
    //this.props.actions.logout();
  }
  render() {
    const { classes } = this.props;
    return (
      <>
        <span>
          <header className={classes.pageHeader}>APIs</header>
          <Tooltip title="Delete" placement="top">
            <Button onClick={this.delete.bind(this)} className={classes.actionButton}>
              <DeleteOutlineIcon color="secondary" className={classes.actionIcon} />
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="top">
            <Button onClick={this.add.bind(this)} className={classes.actionButton}>
              <AddBoxIcon color="primary" className={classes.actionIcon} />
            </Button>
          </Tooltip>
        </span>
        <hr />
      </>
    );
  }
}

API.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(API);
