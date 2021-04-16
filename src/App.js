import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from "./pages/Admin";
import Rooms from "./pages/Rooms";
import Edit from "./pages/Edit";
import AddProduct from "./pages/Add";
import SingleRooms from "./pages/SingleRooms";
import Error404 from "./pages/Error404";
// Pages End

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
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/addProduct" component={AddProduct} />
          <Route exact path="/rooms/:id" component={SingleRooms} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </AuthProvider>

  );
}

export default App;
