import React from 'react'
import style from './Button.scss';
import classNames from 'classnames/bind';
import { Button } from 'material-ui';

const cx = classNames.bind(style);

const DefaultButton = ({onClick}) => {
  return (
    <Button raised color="primary" onClick={onClick}>Hello</Button>
  )
}

export default DefaultButton;

