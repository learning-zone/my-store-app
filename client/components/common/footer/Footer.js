import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

const styles = () => ({
  legal: {
    backgroundColor: '#fff',
    position: 'static',
    bottom: 0,
    width: '97.6%',
    borderTop: '1px solid #eee',
    padding: '15px',
    overflow: 'hidden',
    textAlign: 'center',
  },
});
const Footer = (props) => {
  const { classes } = props;

  return (
    <div className={classes.legal}>
      <div className="copyright">
        © 2022 <a href="https://github.com/learning-zone/my-store">Pradeep Kumar</a>
      </div>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
