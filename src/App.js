import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from "./pages/Admin";
import Hotels from "./pages/Hotels";
import AddProduct from "./pages/Add";
import HotelDetails from "./pages/HotelDetails";
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
          <Route exact path="/hotels" component={Hotels} />
          <Route exact path="/addProduct" component={AddProduct} />
          <Route exact path="/hotel/:id" component={HotelDetails} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </AuthProvider>

  );
}

export default App;
