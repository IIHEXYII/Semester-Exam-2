import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Login from './pages/Login';
import Admin from "./pages/Admin";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
