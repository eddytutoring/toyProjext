import React from 'react'
import style from './FlatButton.scss';
import classNames from 'classnames/bind';
import { Button } from 'material-ui';
import {withStyles} from 'material-ui/styles';
const cx = classNames.bind(style);

const material = theme => ({
  button: {
    marginLeft: -12,
    marginRight: 20,
  }
});

const FlatButton = ({onClick, classes, children}) => {
  return (
    <Button color="contrast" className={classes.button} onClick={onClick}>
      {children}
    </Button>
  )
}

export default withStyles(material)(FlatButton);

