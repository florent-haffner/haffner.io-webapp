import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from '../sections/AppHeader';
import About from '../sections/About';
import FetchedProjects from '../sections/FetchedProjects';
import AppFooter from '../sections/AppFooter';

class AppIndex extends Component {
  render() {
    return (
      // Global Layout
      <div className="text-center">
        <AppHeader />
        <About />
        <div className="main-content text-center container">
          <FetchedProjects />
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default AppIndex;
