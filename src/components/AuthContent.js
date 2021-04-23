import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Dropdown from '../components/Dropdown';


function Nav() {
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
                 <Link className="mobile__link" to='/addproduct'>Add Hotels</Link>
              </li>
           <li>
                 <Link className="mobile__link" to='/admin'>delete Hotels</Link>
              </li>
                <li>
                 <Link className="mobile__link" to='/admin'>View enquiry</Link>
              </li>
              <li>
                 <Link className="mobile__link" to='/admin'>View Messages</Link>
              </li>
           </div>
           <li>
            <button className="navbar__logout nav-align" onClick={logout}>Log out</button>
           </li>
          </>
        ) : (
          <Link className="navbar__link show-nav" to='/login'>Login</Link>
        )}
          </ul>
    );
  }
  
  export default Nav;
  

  