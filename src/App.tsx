import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Project from './sections/Projects';
import Header from './sections/Header';
import About from './sections/About';
import Bottom from './sections/Bottom';

class App extends Component {
  render() {
    return (
      // Global Layout
      <div className="text-center">
        <Header />
        <About />
        <div className="main-content text-center container">
          <Project />
        </div>
        <Bottom />
      </div>
    );
  }
}

export default App;