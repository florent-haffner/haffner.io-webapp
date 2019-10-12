import React, { Component } from 'react';
import Skills from './Skills';
import About from './About';

class Content extends Component {
    render() {
        return (
            <div className="col-9">
                <h3>Content</h3>
                <About />
                <Skills />
            </div>
        );
    }
}

export default Content;