import React, { Component } from 'react';
import '../assets/css/Index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { TextCenter, ContainerCentered } from '../components/Container'

import SinglePageHeader from '../sections/SinglePageHeader';
import About from '../sections/About';
import FetchedProjects from '../sections/FetchedProjects';
import Footer from '../sections/Footer';

class AppIndex extends Component {
  render() {
    return (
      // Global Layout
      <TextCenter>
        <SinglePageHeader />
        <About />
        <ContainerCentered>
          <FetchedProjects />
        </ContainerCentered>
        <Footer />
      </TextCenter>
    );
  }
}

export default AppIndex;
