import React, { Component } from 'react';
import { LinkedinIcon, InstagramIcon } from '../assets/icons';
import GitHub from '../assets/icons/github-white-32.png'
import { WhiteLink as SpacedWhiteLink } from '../components/Link';
import TextBox from '../components/TextBox';

export default class AppFooter extends Component {
    render() {
        return (
            <div className="footer container-fluid">
                <div className="d-flex justify-content-center">
                    <TextBox>
                        <SpacedWhiteLink to={`https://github.com/nelth-fr`}>
                            <img src={GitHub} alt="Github icon" />
                        </SpacedWhiteLink>
                        <SpacedWhiteLink to={`https://www.linkedin.com/in/florent-haffner-31ab5911b/`}>
                            <LinkedinIcon />
                        </SpacedWhiteLink>
                        <SpacedWhiteLink to={`https://www.instagram.com/fh.nelth`}>
                            <InstagramIcon />
                        </SpacedWhiteLink>
                    </TextBox>
                </div>
            </div>
        );
    }
}
