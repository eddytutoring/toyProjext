import React from 'react';
import styles from './Logo.scss';
import classNames from 'classnames/bind';
import {Typography} from 'material-ui';
import {withStyles} from 'material-ui/styles';
const cx = classNames.bind(styles);

const material = theme => ({
  flex: {
    flex: 1
  }
});
const Logo = ({classes}) => {
  return (
    <Typography type="title" color="inherit" className={classes.flex}>
      Tutoring
    </Typography>
  );
};

export default withStyles(material)(Logo);
