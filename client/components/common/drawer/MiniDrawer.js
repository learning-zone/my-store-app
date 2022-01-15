import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { Collapse } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { ExpandLess } from '@material-ui/icons';

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
    overflowX: 'hidden',
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
    margin: 7,
  },
  bigAvatar: {
    width: 50,
    height: 50,
  },
  list: {
    width: 'auto',
  },
  links: {
    textDecoration: 'none',
    color: '#333',
  },
  menuHeader: {
    paddingLeft: '5px',
  },
  root: {
    width: '100%',
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  ListItemText: {
    paddingLeft: '2px',
  },
  ListItemIcon: {
    minWidth: '42px',
  },
});

class MiniDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = { open: {} };

  handleClick = (key) => () => {
    console.log(key);
    this.setState({ [key]: !this.state[key] });
  };

  render() {
    const { classes, navDrawerOpen, menuItems } = this.props;

    return (
      <div className={classes.list}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !navDrawerOpen && classes.drawerPaperClose),
          }}
          open={navDrawerOpen}
        >
          <Avatar
            alt="User"
            src="/img/avatar5.png"
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <Divider />
          <List>
            {menuItems.map(({ key, label, icon: Icon, items }) => {
              const open = this.state[key] || false;
              return (
                <div key={key}>
                  <ListItem button onClick={this.handleClick(key)} title={label}>
                    <ListItemIcon className={classes.ListItemIcon}>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText inset primary={label} className={classes.ListItemText} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {items.map(
                        ({ key: childKey, label: childLabel, icon: ChildIcon, url: ChildUrl }) => (
                          <ListItem key={childKey} button className={classes.nested} title={childLabel}>
                            <ListItemIcon className={classes.ListItemIcon}>
                              <ChildIcon />
                            </ListItemIcon>
                            <Link to={ChildUrl} className={classes.links}>
                              <ListItemText
                                inset
                                primary={childLabel}
                                className={classes.ListItemText}
                              />
                            </Link>
                          </ListItem>
                        )
                      )}
                    </List>
                  </Collapse>
                </div>
              );
            })}
          </List>
        </Drawer>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MiniDrawer);
