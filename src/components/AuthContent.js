import { useContext, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Dropdown from '../components/Dropdown';


function Nav({setShowMenu}) {
    const [auth, setAuth] = useContext(AuthContext);
    const history = useHistory();

    function logout() {
      setAuth(null);
      history.push('/');
    }
  
    return (
        <ul className="ul-flex">
        {auth ? (
          <>
          {/* <li>
            <Link to="/addproduct">Add New</Link>
            </li>
            <li>
           <Link className="navbar__link" to='/admin'>Admin</Link>
           </li> */}
           <Dropdown />
           <span className="navbar__span navbar__span--alt">|</span>
           <div className="mobile">
           <li>
                 <Link className="mobile__link" to='/admin/add-product' onClick={() => setShowMenu(false)}>Add Hotels</Link>
              </li>
           <li>
                 <Link className="mobile__link" to='/admin/delete-product' onClick={() => setShowMenu(false)}>delete Hotels</Link>
              </li>
                <li>
                 <Link className="mobile__link" to='/admin/enquiry' onClick={() => setShowMenu(false)}>View enquiry</Link>
              </li>
              <li>
                 <Link className="mobile__link" to='/admin/messages' onClick={() => setShowMenu(false)}>View Messages</Link>
              </li>
           </div>
           <li>
            <button className="navbar__logout nav-align" onClick={() => {setShowMenu(false); logout()}}>Log out</button>
           </li>
          </>
        ) : (
          <Link className="navbar__link show-nav" to='/login' onClick={() => setShowMenu(false)}>Login</Link>
        )}
          </ul>
    );
  }
  
  export default Nav;
  

  