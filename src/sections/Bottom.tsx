import React, { Component } from 'react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../assets/icons';
import Link from '../components/Link';



class Bottom extends Component {
    render() {
        return (
            <div className="black-background container-fluid">
                <div className="d-flex justify-content-center">
                    <Link to={`https://github.com/nelth-fr`}>
                        <GithubIcon />
                    </Link>
                    <Link to={`https://www.linkedin.com/in/florent-haffner-31ab5911b/`}>
                        <LinkedinIcon />
                    </Link>
                    <Link to={`https://www.instagram.com/fh.nelth`}>
                        <InstagramIcon />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Bottom;