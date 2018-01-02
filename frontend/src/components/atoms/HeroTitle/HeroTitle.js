import React from 'react';
import styles from './HeroTitle.scss';
import classNames from 'classnames/bind';
import {Grid} from 'material-ui';

const cx = classNames.bind(styles);

const HeroTitle = () => {
  return (
      <Grid item xs={12} sm={6} className={cx('title')}>
        <div className={cx('title__top')}>오늘도 튜달이는 말라갑니다.</div>
        <div className={cx('title__large')}> Marketing </div>
        <span className={cx('title__medium')}>일해서</span>
        <span className={cx('title__small')}>튜달이 살찌우자</span>
      </Grid>
  );
};

export default HeroTitle;
