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
                            After some years the idea of upgrading my possibilities spread through my mind and 
                            I decided to get back at University to learn Software engineering.
                        </p>
                        <p className="lead">
                            Beyond this, I'm a huge fan of music and have a photography projects
                            on <Link to={`https://www.instagram.com/fh.nelth/`}>Instagram</Link>.
                        </p>
                    </div>
                </MiniSpacer>
            </>
        );
    }
}
