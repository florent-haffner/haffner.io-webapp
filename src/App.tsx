import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Project from './sections/Projects';
import AppHeader from './sections/AppHeader';
import About from './sections/About';
import AppFooter from './sections/AppFooter';

class App extends Component {
  render() {
    return (
      // Global Layout
      <div className="text-center">
        <AppHeader />
        <About />
        <div className="main-content text-center container">
          <Project />
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default App;