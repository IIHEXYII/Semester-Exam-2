import React from 'react'
import { useRef } from 'react'
import  {CloseDropdown} from './CloseDropdown';
import { Link } from 'react-router-dom';

function Dropdown() {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = CloseDropdown(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
        
    return (
        <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>Admin</span>
        {/* <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" /> */}
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><Link to='/admin/add-product'>Add Hotel</Link></li>
          <li><Link to='/admin/delete-product'>Delete Hotel</Link></li>
          <li><Link to='/admin/enquiry'>View enquiry</Link></li>
          <li><Link to='/admin/messages'>View Messages</Link></li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Dropdown
// Credits to Ryan Finni for the super easy dropdown function 
// https://codesandbox.io/u/rfinni

