import React, { Component } from 'react'
import { PolyBackground, HeroTitle, FlipCard, SecondContents } from 'components';
import styles from './HomeMain.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class HomeMain extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <PolyBackground>
          <HeroTitle/>
        </PolyBackground>
        <SecondContents/>
      </div>
    );
  }
}

export default HomeMain;
