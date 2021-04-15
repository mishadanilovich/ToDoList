import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import timer from '../img/history.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__title">My To Do List</h1>
        <Link to="/history" className="header__history-link">
          <img src={timer} alt="History" className="header__history-icon" />
        </Link>
      </div>
    );
  }
}

export default Header;
