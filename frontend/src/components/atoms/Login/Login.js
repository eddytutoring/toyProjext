import React, {Component} from 'react';
import styles from './Login.scss';
import classNames from 'classnames/bind';
import {FlatButton, LoginModal}from 'components';

const cx = classNames.bind(styles);

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email : '',
      confirm: false,
      showModal : false,
    }

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  close(){
    console.log('close login');
    this.setState({ showModal: false });
  }

  open(){
    console.log('open login');
    this.setState({ showModal: true });
  }

  confirm(email) {
    this.setState({
      confirm: true,
      email: email
    });

    this.close();
  }

  render() {
    const {showModal, confirm, email} = this.state;
    let success = confirm ? <FlatButton>{email}</FlatButton> : <FlatButton onClick={this.open}>Login</FlatButton>;
    return (
      <div style={{"display": "inline-block"}}>
        {success}
        <LoginModal
          showModal={showModal}
          close={this.close}
          confirm={this.confirm}
        ></LoginModal>
      </div>
    );
  }
};

export default Login;
