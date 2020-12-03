import './App.css';

import Home from './components/Home';
import TechnicalStack from './components/TechnicalStack';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';

import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <NavBar />

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
