import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

class Projects extends Component {
    state = {
        projects: [],
        isLoading: Boolean
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('https://api.github.com/users/nelth-fr/repos')
            .then(res => { return res.json() })
            .then(data => this.setState({ projects: data, isLoading: false }));
    }

    render() {
        const { projects, isLoading } = this.state;
        if (isLoading) {
            return <div className="spinner-border justify-content-center" role="status" />
        }

        const OrderinAscDate = () => {}

        // eslint-disable-next-line
        const RenderingProjectStateList = projects.map(((data, i) => {
            if (i >= 0 && i < 5) {
                return (
                    <div className="mt-3 mb-3">
                        <Card className="text-center" key={data.id}>
                            <Card.Header as="h5">{data.name}</Card.Header>
                            <Card.Body>
                                <Card.Text><small className="text-muted">{data.language}</small></Card.Text>
                                <Card.Text className="text-left">{data.description}</Card.Text>
                                <Button variant="primary" href={data.html_url}>Exploring</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            };
        }))

        return (
            <div className="mini-spacer">
                <h4 className="mb-4">Last public projects</h4>
                    {OrderinAscDate}
                    {RenderingProjectStateList}
                <Button
                    variant="primary"
                    size="lg" className="mt-3"
                    href="https://github.com/nelth-fr"> Overview
                </Button>
            </div>
        );
    }
}

export default Projects;