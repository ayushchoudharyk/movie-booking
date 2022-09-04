import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

class Header {
  render() {
    return (
      <div>
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
      </div>
    );
  }
}
export default Header;
