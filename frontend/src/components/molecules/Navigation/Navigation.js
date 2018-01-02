import React from 'react';
import styles from './Navigation.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {FlatButton, Login} from 'components';
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles);


const Navigation = () => {
  return (
    <div className={cx('gnb')}>
      <Login/>
      {/*<Link to="/tutor" style={{textDecoration: 'none'}}>
        <FlatButton>DashBoard</FlatButton>
      </Link>*/}
    </div>
  );
};

Navigation.propTypes = {};
Navigation.defaultProps = {};

export default Navigation;
