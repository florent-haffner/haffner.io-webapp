import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="about mini-spacer">
                <div className="container align-middle text-left">
                    <h4>About</h4>
                    <p className="lead">
                        I've spend a few years working on Chemical industry, in my occupation I had to
                        learn new things and solve problems everyday and I liked it
                        but I decided to get back at University to explore deeper worlds.
                        Currently I am in last year of undergraduate at Université de Haute-Alsace (France)
                        working on meaningful projects with local companies.
                    </p>
                    <p className="lead">
                        I have a lot of interest in Machine Learning, 3D engines,
                        Scalable distributed systems and back-end development.
                    </p>
                    <p className="lead">
                        I'm also a huge fan of music and have a photography projects
                    on <a href="https://www.instagram.com/fh.nelth/">Instagram</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default About;