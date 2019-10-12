import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Project from './Components/Projects';
import Content from './Components/Content';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      // Global Layout
      <div className="App container-fluid">
        <Header />
        <div className="row">
          <Content />
          <Project />
        </div>
      </div>
    );
  }
}

export default App;