import React from 'react';
import styles from './Body.scss';
import classNames from 'classnames/bind';
import { HomeMain } from 'components';

const cx = classNames.bind(styles);

const Body = ({body}) => {
  let bodyContainer;

  if(body === 'home') {
    bodyContainer = <HomeMain/>
  }

  return (
    <div className={cx('body')}>
      {bodyContainer}
    </div>
  );
};

export default Body;
