
import React, { Component } from 'react';
import logo from '../assets/images/meme.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AuthContent from './AuthContent';

export default class Nav extends Component {
    state= {
      isOpen:false
     }
     handleToggle = () => {
       this.setState({isOpen:!this.state.isOpen})
     }
  render() {
    return <nav className="navbar">
        <div className="navbar__center">
        <div className="navbar__header">
          <Link to="/">
            <img className="navbar__logo" src={logo} alt="Hotel Logo" />
          </Link>
          <h1 className="navbar__title">Hotel Booking</h1>
          <button type="button" className="navbar__btn"
          onClick={this.handleToggle}>
            <FaBars className="navbar__icon" />
          </button>
        </div>
          <ul className={this.state.isOpen?"navbar__link show-nav":"navbar__link"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <span className="navbar__span">|</span>
              <li>
                <Link to="/hotels">Hotels</Link>
              </li>
              <span className="navbar__span">|</span>
              <li>
                <Link to="/contact">Message</Link>
              </li>
              <span className="navbar__span">|</span>
              
              <AuthContent />
              
            </ul>
          </div>
        </nav>

  }
}