import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { cyan } from '@mui/material/colors';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const styles = () => ({
  root: {
    paddingTop: 0,
  },
  subheader: {
    fontSize: 24,
    backgroundColor: cyan[600],
    color: '#FFFFFF',
  },
  actions: {
    justifyContent: 'flex-end',
  },
});

const Product = (props) => {
  const { classes } = props;
  const products = props.data;

  return (
    <Card>
      <CardHeader title="Recent Products" />
      <Divider />
      <CardContent>
        <List>
          {products.map((item, i) => (
            <ListItem divider={i < products.length - 1} key={item.id}>
              <ListItemIcon>
                <Avatar>
                  <WallpaperIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary={item.title} secondary={item.text} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text">
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

Product.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
};

export default withStyles(styles)(Product);
