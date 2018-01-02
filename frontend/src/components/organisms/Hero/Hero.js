import React from 'react';
import styles from './Hero.scss';
import classNames from 'classnames/bind';
import {HeroBackground, HeroTitle} from 'components';

const cx = classNames.bind(styles);

const Hero = () => {
  return (
      <HeroBackground>
        <HeroTitle></HeroTitle>
      </HeroBackground>
  );
};

export default Hero;
