
import React, {useState} from 'react';
// import logo from '../assets/images/meme.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AuthContent from './AuthContent';
import { RiBuilding2Fill } from "react-icons/ri";
export default () => {
    const [showMenu, setShowMenu] = useState(false)

     const handleToggle = (state) => {
       setShowMenu(state);
     }

     return (
      <nav className="navbar">
      <div className="navbar__center">
      <div className="navbar__header">
        <Link to="/">
          <RiBuilding2Fill className="navbar__logo" />
          {/* <img className="navbar__logo" src={logo} alt="Hotel Logo" /> */}
        </Link>
        <Link className="navbar__title" to="/">
        <h1>Holidaze</h1>
        </Link>
        <button type="button" className="navbar__btn"
        onClick={() => setShowMenu(!showMenu)}>
          <FaBars className="navbar__icon" />
        </button>
      </div>
        <ul className={showMenu?"navbar__link show-nav":"navbar__link"}>
            <li>
              <Link to="/" onClick={() => setShowMenu(false)}>Home</Link>
            </li>
            <span className="navbar__span">|</span>
            <li>
              <Link to="/hotels" onClick={() => setShowMenu(false)}>Hotels</Link>
            </li>
            <span className="navbar__span">|</span>
            <li>
              <Link to="/contact" onClick={() => setShowMenu(false)}>Contact</Link>
            </li>
            <span className="navbar__span">|</span>
            
            <AuthContent setShowMenu={handleToggle}/>
            
          </ul>
        </div>
      </nav>
     )
}