import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes , 
  Route, 
  Link,
  NavLink,
} from 'react-router-dom';


import Home from './pages/home.js';
import Projects from './pages/projects.js';
import Experience from './pages/experience'
import './App.css';

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Home</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/projects">
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/experiences">
            Experiences
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
     
      <Router>
          <Navigation />
          <div class="row d-flex justify-content-center">
              <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/experiences" element={<Experience/>} />
              </Routes>
          </div> 
        </Router>
        
    );
  }
}


export default App;
