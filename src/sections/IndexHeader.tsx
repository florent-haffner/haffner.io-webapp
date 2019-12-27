import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { WhiteLink } from '../components/Link';
import TextBox from '../components/TextBox';

const HeadingPrimary = ({ children }) => {
    return (
        <div style={{
            color: `#fff`,
            backfaceVisibility: `hidden`,
            marginTop: `4vh`,
            marginBottom: `2vh`,
            textAlign: `center`
        }}>
            {children}
        </div>
    )
}
const BrandBox = ({ children }) => {
    return (
        <div style={{
            position: `absolute`,
            top: `4vh`,
            left: `3vh`
        }}>
            {children}
        </div>
    )
}
const SocialLink = () => {
    return (
        <div className="iconbar">
            <a className="spacedlink" href={`https://github.com/nelth-fr`}>
                <FontAwesomeIcon icon={faGithub} size={`lg`}/>
            </a>
            <a className="spacedlink" href={`https://www.linkedin.com/in/florent-haffner-31ab5911b/`}>
                <FontAwesomeIcon icon={faLinkedinIn} size={`lg`}/>
            </a>
            <a className="spacedlink" href={`https://www.instagram.com/fh.nelth`}>
                <FontAwesomeIcon icon={faInstagram} size={`lg`}/>
            </a>
        </div>
    )
}

export default class IndexHeader extends Component {
    render() {
        return (
            <div className="header">
                <BrandBox>
                    <WhiteLink to={`https://haffner.io`}>
                        haffner.io
                    </WhiteLink>
                </BrandBox>
                <TextBox>
                    <HeadingPrimary>
                        <h1>Florent HAFFNER,</h1>
                        <h5>Software developer, soon starting an Internship at <WhiteLink to={`https://finalgo.fr`}>Finalgo</WhiteLink>.</h5>
                        <SocialLink />
                    </HeadingPrimary>
                </TextBox>
            </div>
        );
    }
}
