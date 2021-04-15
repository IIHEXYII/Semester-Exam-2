import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Admin from "./pages/Admin";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";
import Error404 from "./pages/Error404";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:id" component={SingleRooms} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </AuthProvider>

  );
}

export default App;
