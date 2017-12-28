import React from 'react';
import { Logo, Navigation } from 'components';
import headerStyles from './Header.scss';
import classNames from 'classnames/bind';
import {AppBar, Toolbar, Grid} from 'material-ui';
import {withStyles} from 'material-ui/styles';
const cx = classNames.bind(headerStyles);

const styles = theme => ({
  header: {
    backgroundColor: 'transparent',
    width: '100%',
    boxShadow: 'none',
  },

  button: {
    backgroundColor: 'transparent'
  }
});

const Header = ({classes}) => {
  return (
    <Grid container spacing={16}>
      <AppBar className={classes.header}>
        <Toolbar>
          <Logo/>
          <Navigation/>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default withStyles(styles)(Header);
