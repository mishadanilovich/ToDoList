import React from 'react';
import { Link } from 'react-router-dom';
import history from '../history';
import '../style/Header.css';
import timer from '../img/history.svg';
import home from '../img/home.svg';

class Header extends React.Component {
  state = { location: '/' };

  renderHeader() {
    if (history.location.pathname === '/history') {
      return (
        <>
          <h1 className="header__title">History</h1>
          <Link to="/" className="header__history-link">
            <img src={home} alt="Home" className="header__history-icon" />
          </Link>
        </>
      );
    } else {
      return (
        <>
          <h1 className="header__title">My To Do List</h1>
          <Link to="/history" className="header__history-link">
            <img src={timer} alt="History" className="header__history-icon" />
          </Link>
        </>
      );
    }
  }

  render() {
    return <div className="header">{this.renderHeader()}</div>;
  }
}

export default Header;
