import React from 'react';
import { Logo, Navigation } from 'components';
import styles from './Header.scss';
import classNames from 'classnames/bind';
//import {AppBar, Toolbar, Grid} from 'material-ui';
//import {withStyles} from 'material-ui/styles';
const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('header')}>
      <Logo/>
      <Navigation/>
    </div>
  );
};

export default Header;