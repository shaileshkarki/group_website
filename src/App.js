import React, {useState} from 'react';
import './App.css';
import Home from './components/Home';
import TechnicalStack from './components/TechnicalStack';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';

import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar';

//themes
import {ThemeProvider} from 'styled-components';
import THEMES from './constants/theme';
import {getTheme} from './getTheme'
import {Header} from './styles';
// Import fontawesome icons for react.

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Need to do this here to load the icons
library.add(fab, fas);


function App() {
const [themeName, setThemeName] =useState(THEMES.DARCULA);

  return (
    <ThemeProvider theme={getTheme(themeName)}>
    <Router>
      {/* <Switch> */}
      <div>
        <header>
          <nav>
            <NavBar />

          </nav>
        </header>
        <Header>
        <button onClick={()=> setThemeName(THEMES.DARCULA)}>Dracula</button>
        <button onClick={()=> setThemeName(THEMES.APPLE)}>Apple</button>
        <button onClick={()=> setThemeName(THEMES.BASIC)}>Basic</button>
        <div>
          <Route path="/TechnicalStack" component={TechnicalStack} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route exact path="/" component={Home} />
        </div>
        
        </Header>
      </div>
      {/* </Switch> */}
    </Router>
    </ThemeProvider>
  );
}

export default App;
