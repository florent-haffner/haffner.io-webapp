import React, { Component } from 'react';
import Link from '../components/Link';
import TextBox from '../components/TextBox';

const HeadingPrimary = ({ children }) => {
    return (
        <div style={{
            color: `#fff`,
            textTransform: `uppercase`,
            backfaceVisibility: `hidden`,
            marginBottom: `2vh`
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
            'an Ex-Physicist',
            'a Software developer',
            'a Photographer'
        ]
    }
    render() {
        return (
            <div className="header">
                <BrandBox>
                    <Link to={`https://haffner.io`}>
                        haffner.io
                    </Link>
                </BrandBox>
                <TextBox>
                    <HeadingPrimary>
                        <h1>Florent HAFFNER</h1>
                        <h5>
                            I'm {this.state.pro[1]} from France
                        </h5>
                    </HeadingPrimary>
                </TextBox>
            </div>
        );
    }
}
