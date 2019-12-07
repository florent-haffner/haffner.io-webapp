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
            top: `6vh`,
            left: `4vh`
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
                        <h3>Hi I'm</h3>
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
