import React, { Component } from 'react';
import '../assets/css/Index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { TextCenter, ContainerAlignCenter } from '../components/Container'

import IndexHeader from '../sections/IndexHeader';
import About from '../sections/About';
import FetchedProjects from '../sections/FetchedProjects';
import Footer from '../sections/Footer';

class AppIndex extends Component {
  render() {
    return (
      <TextCenter>
        <IndexHeader />
        <About />
        <ContainerAlignCenter>
          <FetchedProjects />
        </ContainerAlignCenter>
        <Footer />
      </TextCenter>
    );
  }
}
export default AppIndex;
