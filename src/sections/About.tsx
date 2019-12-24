import React, { Component } from 'react';
import MiniSpacer from '../components/MiniSpacer'
import { Link } from '../components/Link';

export default class About extends Component {
    render() {
        return (
            <>
                <MiniSpacer>
                    <div className="container" style={{
                        textAlign: `left`
                    }}>
                        <p className="lead">
                            I've worked in Chemical Engineering were I've learned efficiency and reliability.
                        </p>
                        <p className="lead">
                            During this period I took lots of time beside my work to learn about Architecture, 
                            Photography and the idea of upgrading my possibilities spread through my mind.
                            I decided to get back at University and learn Software engineering.
                        </p>
                        <p className="lead">
                            You can watch my open projects 
                            on <Link to={`https://www.instagram.com/fh.nelth/`}>Instagram</Link> or <
                                Link to={`https://www.linkedin.com/in/florent-haffner-31ab5911b/`}>LinkedIn</Link>.
                        </p>
                    </div>
                </MiniSpacer>
            </>
        );
    }
}
