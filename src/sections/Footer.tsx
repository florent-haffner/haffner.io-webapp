import React, { Component } from 'react';
import TextBox from '../components/TextBox';

export default class Footer extends Component {
    state = {
        date: ''
    }

    Year() {
        let currentYear = new Date().getFullYear()
        this.setState({ date: currentYear})
    }

    componentDidMount() {
        this.Year()
    }

    render() {
        return (
            <div className="footer container-fluid">
                <div className="d-flex justify-content-center">
                    <TextBox>
                        <p>Copyright © {this.state.date}, Florent HAFFNER</p>
                    </TextBox>
                </div>
            </div>
        );
    }
}
