import React, {Component} from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import {TextField, Button} from 'material-ui';
import Dialog, {DialogTitle, DialogContent, DialogContentText, DialogActions} from 'material-ui/Dialog';
import axios from 'axios';

const cx = classNames.bind(styles);

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    const target = event.target;

    this.setState({
      [target.id]: target.value,
    });
  }

  handleLogin() {
    axios.post('http://localhost:3001/api/v1/auth/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log(response);
        if(!!response.data[0]) {
          this.setState({
            error: '아이디있당'
          })
          this.props.confirm(response.data[0].email);
        }else {
          this.setState({
            error: '아이디가 없쪄'
          })
        }
      })
      .catch(response => {
        console.log(response);
        this.setState({
          error: response
        })
      })
  }

  render () {
    const {showModal, close} = this.props;

    return (
      <Dialog
        aria-labelledby="form-dialog-title"
        open={showModal}
        onClose={close}
        BackdropTransitionDuration={1000}
      >
        <DialogTitle>로그인</DialogTitle>
        <DialogContent>
          <DialogContentText>로그인 해주세요.</DialogContentText>
          <DialogContentText>{this.state.error}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleLogin} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default LoginModal
