import React, { Component } from 'react';

import Email from '../iconsBar/email.png';
import Github from '../iconsBar/github.png';
import Instagram from '../iconsBar/instagram.png';
import { Button } from 'react-bootstrap';

class Bottom extends Component {
    render() {
        return (
            <div className="black-background container-fluid justify-content-around">
                {/* TODO : image sizing */}
                {/* <div className="">
                    <img src={Email} ></img>
                </div>
                <div className="">
                    <img src={Github}></img>
                </div>
                <div className="">
                    <img src={Instagram}></img>
                </div> */}

                <Button
                    variant="primary"
                    size="lg"
                    href="https://github.com/nelth-fr"
                >Github</Button>
                <Button
                    variant="primary"
                    size="lg"
                    href="https://www.linkedin.com/in/florent-haffner-31ab5911b/"
                >LinkedIn</Button>
                <Button
                    variant="primary"
                    size="lg"
                    href="mailto:florent.haffner@protonail.com"
                >Email</Button>
            </div>
        );
    }
}

export default Bottom;