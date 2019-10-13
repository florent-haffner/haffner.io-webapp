import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Project from './Components/Projects';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';

class App extends Component {
  render() {
    return (
      // Global Layout
      <div className="text-center">
        <Header />
        <About />
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <Skills />
          </div>
          <div className="col-md-12 col-lg-3">
            <Project />
          </div>
        </div>
      </div>
    );
  }
}

export default App;