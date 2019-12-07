import React, { Component } from 'react';
import Link from '../components/Link';

export default class AppHeader extends Component {
    state = {
        pro: [
            'an Ex-Physicist',
            'a Software developer',
            'a Photographer'
        ]
    }
    render() {
        return (
            <div className="header">
                <div className="brand-box">
                    <Link to={`https://haffner.io`}>
                        haffner.io
                    </Link>
                </div>
                <div className="text-box">
                    <div className="heading-primary">
                    <h1>Florent HAFFNER</h1>
                    <h5>
                        I'm {this.state.pro[1]} from France
                    </h5>

                    </div>
                </div>
            </div>
        );
    }
}
