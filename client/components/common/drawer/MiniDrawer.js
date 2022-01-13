import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';

import { Collapse } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { ExpandLess } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const drawerWidth = 250;

const styles = (theme) => ({
  drawerPaper: {
    position: 'relative',
    height: 'auto',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: 60,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    height: 56,
    [theme.breakpoints.up('sm')]: {
      height: 64,
    },
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  list: {
    width: 250,
  },
  links: {
    textDecoration: 'none',
  },
  menuHeader: {
    paddingLeft: '5px',
  },
});

class MiniDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(item) {
    this.setState((prevState) => ({ [item]: !prevState[item] }));
  }

  handler(children) {
    const { classes } = this.props;
    const { state } = this;
    return children.map((subOption) => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem button key={subOption.name}>
              <Link to={subOption.url} className={classes.links}>
              <ListItemText inset primary={subOption.name} />
              </Link>
            </ListItem>
          </div>
        );
      }
      return (
        <div key={subOption.name}>
          <ListItem button onClick={() => this.handleClick(subOption.name)}>
            <ListItemText inset primary={subOption.name} />
            {state[subOption.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={state[subOption.name]} timeout="auto" unmountOnExit>
            {this.handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  }
  render() {
    const { classes, navDrawerOpen, menuItems } = this.props;

    return (
      <div className={classes.list}>
        <Drawer
          variant="permanent"
          anchor="left"
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !navDrawerOpen && classes.drawerPaperClose),
          }}
          open={navDrawerOpen}
        >
          <div>
            <List>
              <ListItem key="menuHeading" divider disableGutters>
                <Avatar
                  alt="User"
                  src="/img/avatar5.png"
                  className={classNames(classes.avatar, classes.bigAvatar)}
                />
                <ListItemText className={classes.menuHeader} inset primary="Administrator" />
              </ListItem>
              {this.handler(menuItems)}
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}
MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  navDrawerOpen: PropTypes.bool,
};
export default withStyles(styles)(MiniDrawer);
