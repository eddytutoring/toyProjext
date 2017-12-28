import React, {Component} from 'react';
import styles from './PolyBackground.scss';
import classNames from 'classnames/bind';
import {CSSTransition} from 'react-transition-group';
import {Grid} from 'material-ui';

const cx = classNames.bind(styles);

const BackgroundBubble = ({ in: show , children, ...props}) => (
  <CSSTransition {...props}
                 in={show}
                 timeout={2000}
                 classNames={{
                   enter: cx('fade-enter'),
                   enterActive: cx('fade-enter-active'),
                   exit: cx('fade-exit'),
                   exitActive: cx('fade-exit-active'),
                 }}>

    {(state) => (
      <Grid container spacing={16} className={cx('background')}>
        <div className={cx({'back': show})}></div>
        <div className={cx({'front': show})}></div>
        {children}
      </Grid>
      )}
  </CSSTransition>
);

class PolyBackground extends Component{
    constructor(props) {
      super(props);

      this.state = {
        show: false,
      }
    }

    componentDidMount() {
      this.setState({
        show : !this.state.show,
      });
    }

    render() {
      const {children} = this.props;
      const {show} = this.state;

      return (
        <BackgroundBubble in={!!show}>
          {children}
        </BackgroundBubble>
      );
    }
};

export default PolyBackground;