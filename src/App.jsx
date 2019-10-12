import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Project from './Projects';
import Content from './Content';

class App extends Component {
  render() {
    return (
      // Global Layout
      <div className="App container-fluid">
        <div className="row">
          <Content />
          <Project />
        </div>
      </div>
    );
  }
}

export default App;