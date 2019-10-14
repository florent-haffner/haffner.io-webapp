import React, { Component } from 'react';

import Email from '../iconsBar/email.png';
import GitHub from '../iconsBar/github.png';
import LinkedIn from '../iconsBar/linkedin.png';


class Bottom extends Component {
    render() {
        return (
            <div class="black-background container-fluid">
                <div class="container">
                    <div className="d-flex justify-content-center">
                        <a className="img-spacer" href="https://github.com/nelth-fr">
                            <img src={GitHub} width={50} heigh={50} alt="link to GitHub" />
                        </a>
                        <a className="img-spacer" href="https://www.linkedin.com/in/florent-haffner-31ab5911b/">
                            <img src={LinkedIn} width={50} heigh={50} alt="link to LinkedIn" />
                        </a>
                        <a className="img-spacer" href="mailto:florent.haffner@protonmail.com">
                            <img src={Email} width={50} heigh={50} alt="link to email" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bottom;