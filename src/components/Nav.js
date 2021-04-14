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
    <nav className="nav">
      <Link className="nav__link" to='/'>Home</Link>
      {auth ? (
        <>
          | <Link className="nav__link" to='/contact'>Contact</Link>
          <button className="nav__logout" onClick={logout}>Log out</button>
        </>
      ) : (
        <Link className="nav__link" to='/login'>Login</Link>
      )}
    </nav>
  );
}

export default Nav;