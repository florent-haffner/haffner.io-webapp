import React, { Component } from 'react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../assets/icons';
import Link from '../components/Link';
import TextBox from '../components/TextBox';


export default class AppFooter extends Component {
    render() {
        return (
            <div className="footer container-fluid">
                <div className="d-flex justify-content-center">
                    <TextBox>
                        <Link to={`https://github.com/nelth-fr`}>
                            <GithubIcon />
                        </Link>
                        <Link to={`https://www.linkedin.com/in/florent-haffner-31ab5911b/`}>
                            <LinkedinIcon />
                        </Link>
                        <Link to={`https://www.instagram.com/fh.nelth`}>
                            <InstagramIcon />
                        </Link>
                    </TextBox>
                </div>
            </div>
        );
    }
}
