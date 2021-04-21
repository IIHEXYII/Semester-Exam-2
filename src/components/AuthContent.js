import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

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
          <li>
            <Link to="/addproduct">Add New</Link>
            </li>
           <Link className="navbar__link" to='/admin'>Admin</Link>
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
  