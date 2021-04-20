import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { GiHamburgerMenu } from 'react-icons/gi';

import Login from "./User pages/Login";
import SignUp from "./User pages/Sign up";
import Home from "./Pages/Home";
import Navbar from './components/Navbar';

function App() {

  const [showNav, setShowNav] = useState(false)
  return (<Router>


    <header>
      <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
    </header>

    <Navbar show={showNav} />

    <div className="auth-wrapper">
      <div className="auth-inner">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>

    </div>

  </Router>
  );
}

export default App;
