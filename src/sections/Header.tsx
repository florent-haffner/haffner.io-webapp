import React, { Component } from 'react';

class Header extends Component {
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
                <div className="App-header">
                    <h1>Florent HAFFNER</h1>
                    <h5>
                        I'm {this.state.pro[1]} from France
                    </h5>
                </div>
            </div>
        );
    }
}

export default Header;