import './App.css';

import Home from './components/Home';
import TechnicalStack from './components/TechnicalStack';
import Portfolio from './components/Portfolio'; 
import ContactUs from './components/ContactUs';

import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <header>
        <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/TechnicalStack">Technical-Stack</NavLink>
          <NavLink to="/Portfolio">Portfolio</NavLink>
          <NavLink to="/ContactUs">Contact Us</NavLink>
        </nav>
      </header>
      <div>
        <Route path="/TechnicalStack" component={TechnicalStack} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route exact path="/" component={Home} />
      </div>
    </div>
    </Router>
  );
}

export default App;
