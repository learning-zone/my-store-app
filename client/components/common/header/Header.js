import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import { PowerSettingsNew } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

import * as authService from '../../../services/authService';

const drawerWidth = 250;

const styles = (theme) => ({
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 45,
  },
  menuButtonShift: {
    marginLeft: -15,
  },
  flex: {
    flex: 1,
  },
});

class Header extends Component {
  logOut(e) {
    e.preventDefault();
    this.props.actions.logout();
  }

  render() {
    const { classes, navDrawerOpen, handleToggleDrawer } = this.props;

    return (
      <div>
        <AppBar className={classNames(classes.appBar, navDrawerOpen && classes.appBarShift)}>
          <Toolbar>
            <IconButton
              aria-label="Menu"
              onClick={handleToggleDrawer}
              className={classNames(
                !navDrawerOpen && classes.menuButton,
                navDrawerOpen && classes.menuButtonShift
              )}
            >
              <MenuIcon style={{ color: '#FFF', fontWeight: 'bold' }} />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}></Typography>
            <Tooltip title="Sign Out">
              <Button onClick={this.logOut.bind(this)}>
                <PowerSettingsNew style={{ color: '#FFF', fontWeight: 'bold' }} />
              </Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign({}, authService), dispatch),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(Header));
