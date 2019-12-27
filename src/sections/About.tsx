import React, { Component } from 'react';
import MiniSpacer from '../components/MiniSpacer'
import { Container } from '../components/Container'
import { Link } from '../components/Link';

export default class About extends Component {
    render() {
        return (
            <>
                <MiniSpacer>
                    <Container>
                        <p className="lead">
                            I've worked five years in Chemical Engineering were I've learned efficiency and reliability.
                        </p>
                        <p className="lead">
                            During this period I took lots of time beside my work to study Architecture, 
                            Photography and Design. The idea of upgrading my possibilities spread through my mind.
                            I decided to get back at University and learn Software engineering.
                        </p>
                        <p className="lead">
                            Currently  I'm waiting (2020/03/03) to start an Internship in Lyon at <Link to={`https://finalgo.fr`}>Finalgo</Link> to validate my Bachelor.
                        </p>
                    </Container>
                </MiniSpacer>
            </>
        );
    }
}
