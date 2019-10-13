import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Project from './Components/Projects';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Bottom from './Components/Bottom';

class App extends Component {
  render() {
    return (
      // Global Layout
      <div className="text-center">
        <Header />
        <About />
        <div className="container">
          <Skills />
          <Project />
        </div>
        <Bottom />
      </div>
    );
  }
}

export default App;