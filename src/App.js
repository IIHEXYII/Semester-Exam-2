import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Delete from "./pages/AdminDelete";
import Hotels from "./pages/Hotels";
import Add from "./pages/AdminAdd";
import Enquiry from './pages/AdminEnquiry';
import Messages from './pages/AdminMessage';
import HotelDetails from "./pages/HotelDetails";
import Error404 from "./pages/Error404";
import Contact from "./pages/Contact";
// Pages End

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path="/hotels" component={Hotels} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/hotel/:id" component={HotelDetails} />
          <Route exact path="/admin/add-product" component={Add} />
          <Route exact path="/admin/delete-product" component={Delete} />
          <Route exact path="/admin/enquiry" component={Enquiry} />
          <Route exact path="/admin/messages" component={Messages} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </AuthProvider>

  );
}

export default App;
