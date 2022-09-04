import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import ReactModal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import BookShow from '../../screens/bookshow/BookShow';
import ReactDOM from 'react-dom';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const TabContainer = function (props) {
  return (
    <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      value: 0,
      usernameRequired: 'dispNone',
      passwordRequired: 'dispNone',
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
      registerPassword: '',
      contactnumber: '',
      firstnameRequired: 'dispNone',
      lastnameRequired: 'dispNone',
      emailRequired: 'dispNone',
      contactnumberRequired: 'dispNone',
      registerPasswordRequired: 'dispNone',
    };
  }

  openModalHandler = () => {
    this.setState({
      isModalOpen: true,
      usernameRequired: 'dispNone',
      passwordRequired: 'dispNone',
      firstnameRequired: 'dispNone',
      lastnameRequired: 'dispNone',
      emailRequired: 'dispNone',
      contactnumberRequired: 'dispNone',
      registerPasswordRequired: 'dispNone',
      value: 0,
    });
  };

  closeModalHandler = () => {
    this.setState({ isModalOpen: false });
  };

  onChangeHandler = (event, val) => {
    this.setState({ value: val });
  };

  loginClickHandler = () => {
    this.state.username === ''
      ? this.setState({ usernameRequired: 'dispBlock' })
      : this.setState({ usernameRequired: 'dispNone' });
    this.state.password === ''
      ? this.setState({ passwordRequired: 'dispBlock' })
      : this.setState({ passwordRequired: 'dispNone' });
  };

  registerClickHandler = () => {
    this.setState(
      this.state.firstname === ''
        ? this.setState({ firstnameRequired: 'dispBlock' })
        : this.setState({ firstnameRequired: 'dispNone' })
    );
    this.setState(
      this.state.lastname === ''
        ? this.setState({ lastnameRequired: 'dispBlock' })
        : this.setState({ lastnameRequired: 'dispNone' })
    );
    this.setState(
      this.state.email === ''
        ? this.setState({ emailRequired: 'dispBlock' })
        : this.setState({ emailRequired: 'dispNone' })
    );
    this.setState(
      this.state.registerPassword === ''
        ? this.setState({ registerPasswordRequired: 'dispBlock' })
        : this.setState({ registerPasswordRequired: 'dispNone' })
    );
    this.setState(
      this.state.contactnumber === ''
        ? this.setState({ contactnumberRequired: 'dispBlock' })
        : this.setState({ contactnumberRequired: 'dispNone' })
    );
  };

  inputusernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  passwordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  registerPasswordChangeHandler = (e) => {
    this.setState({ registerPassword: e.target.value });
  };

  inputfirstnameChangeHandler = (e) => {
    this.setState({ firstname: e.target.value });
  };

  inputlastnameChangeHandler = (e) => {
    this.setState({ lastname: e.target.value });
  };
  inputemailChangeHandler = (e) => {
    this.setState({ email: e.target.value });
  };
  inputcontactnumberChangeHandler = (e) => {
    this.setState({ contactnumber: e.target.value });
  };

  bookshowHandler = () => {
    ReactDOM.render(<BookShow />, document.getElementById('root'));
  };

  render() {
    return (
      <div>
        <header className="header-container">
          <img className="app-logo" src={logo} alt="logo" />
          <div className="login-button">
            <Button
              variant="contained"
              color="default"
              onClick={this.openModalHandler}
            >
              Login
            </Button>
          </div>
          {this.props.showBookshow === 'true' ? (
            <div className="bookshow-button">
              <Button
                variant="contained"
                color="primary"
                onClick={this.bookshowHandler}
              >
                BOOK SHOW
              </Button>
            </div>
          ) : (
            ''
          )}
        </header>
        <ReactModal
          style={customStyles}
          ariaHideApp={false}
          isOpen={this.state.isModalOpen}
          contentLabel="Login"
          onRequestClose={this.closeModalHandler}
        >
          <Tabs value={this.state.value} onChange={this.onChangeHandler}>
            <Tab label="LOGIN"></Tab>
            <Tab label="REGISTER"></Tab>
          </Tabs>
          {this.state.value === 0 && (
            <TabContainer>
              <FormControl required>
                <InputLabel htmlFor="username"> Username </InputLabel>
                <Input
                  id="username"
                  type="text"
                  onChange={this.inputusernameChangeHandler}
                />
                <FormHelperText className={this.state.usernameRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="password"> Password </InputLabel>
                <Input
                  id="password"
                  type="password"
                  onChange={this.passwordChangeHandler}
                />
                <FormHelperText className={this.state.passwordRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.loginClickHandler}
              >
                LOGIN
              </Button>
            </TabContainer>
          )}

          {this.state.value === 1 && (
            <TabContainer>
              <FormControl required>
                <InputLabel htmlFor="firstname"> First Name </InputLabel>
                <Input
                  id="firstname"
                  type="text"
                  onChange={this.inputfirstnameChangeHandler}
                />
                <FormHelperText className={this.state.firstnameRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="lastname"> Last Name </InputLabel>
                <Input
                  id="lastname"
                  type="text"
                  onChange={this.inputlastnameChangeHandler}
                />
                <FormHelperText className={this.state.lastnameRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="email"> Email </InputLabel>
                <Input
                  id="email"
                  type="email"
                  onChange={this.inputemailChangeHandler}
                />
                <FormHelperText className={this.state.emailRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="password"> Password </InputLabel>
                <Input
                  id="password"
                  type="password"
                  onChange={this.registerPasswordChangeHandler}
                />
                <FormHelperText className={this.state.registerPasswordRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="contactnumber"> Contact No. </InputLabel>
                <Input
                  id="contactnumber"
                  type="text"
                  onChange={this.inputcontactnumberChangeHandler}
                />
                <FormHelperText className={this.state.contactnumberRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.registerClickHandler}
              >
                REGISTER
              </Button>
            </TabContainer>
          )}
        </ReactModal>
      </div>
    );
  }
}

export default Header;
