import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';

import Logo from './image/Logo.png';
import Home from './pages/home';

import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-dark bg-dark shadow mb-3">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link className="navbar-brand" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/profile">
            Experiences
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
      <div class="container">
        <img src={Logo}  width="1000" height="100"/>
        <div class="row">
        
        <Router>
        <div class="col-sm-2 "> 
          <Navigation />
          </div>
          <div class="col-sm-10"> 
          
           
              <Switch>
              <Route path="/" component={Home} />
                
              </Switch>
            
          
          </div>
        </Router>
       
        </div>
        </div>
    );
  }
}


export default App;
