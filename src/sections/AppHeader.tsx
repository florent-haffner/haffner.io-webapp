import React, { Component } from 'react';
import { WhiteLink } from '../components/Link';
import TextBox from '../components/TextBox';
import Typical from '../components/Typical/Index'

const HeadingPrimary = ({ children }) => {
    return (
        <div style={{
            color: `#fff`,
            textTransform: `uppercase`,
            backfaceVisibility: `hidden`,
            marginTop: `4vh`,
            marginBottom: `2vh`,
            textAlign: `left`
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

export default class AppHeader extends Component {
    state = {
        pro: [
            'an Ex-Physicist.', 500,
            'a Photographer.', 1000,
            'a Software developer.', 1000
        ]
    }
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
                        <span style={{ fontSize: `1.2em`, fontWeight: 550 }}>Hi I'm</span>
                        <h1>Florent HAFFNER,</h1>
                        <Typical
                            steps={this.state.pro}
                            loop={1}
                            wrapper="h3"
                        />
                    </HeadingPrimary>
                </TextBox>
            </div>
        );
    }
}
