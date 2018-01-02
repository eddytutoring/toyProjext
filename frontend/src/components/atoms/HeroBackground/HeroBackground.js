import React, {Component} from 'react';
import styles from './HeroBackground.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class BubbleBackground extends Component{
    constructor(props) {
      super(props);
    }

    render() {
      const {children} = this.props;

      return (
        <div className={cx('background')}>
          {children}
        </div>
      );
    }
};

export default BubbleBackground;