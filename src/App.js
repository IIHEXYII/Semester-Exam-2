import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <AuthProvider>
    <Router>
       <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
