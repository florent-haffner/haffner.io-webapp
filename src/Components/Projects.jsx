import React, { Component } from 'react';
import { Button, Card, Row, Col, Tab, ListGroup } from 'react-bootstrap';

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

        const OrderinAscDate = () => { }

        // eslint-disable-next-line
        const RenderingListGroupItem = projects.map(((data, i) => {
            if (i >= 0 && i < 5) {
                return (
                    <ListGroup.Item action href={`#${data.id}`}>
                        {data.name}
                    </ListGroup.Item>
                )
            }
        }))

        const RenderingTabPane = projects.map((data => {
            return (
                <Tab.Pane eventKey={`#${data.id}`}>
                    <Card.Text><small className="text-muted">{data.language}</small></Card.Text>
                    <p className="mt-4 mb-4">
                        {data.description}
                    </p>
                    <Button variant="success" href={data.html_url}>Exploring this project</Button>
                </Tab.Pane>
            )
        }))

        return (
            <div className="venter mini-spacer">
                <h4 className="title-spacer">Last public ventures</h4>

                {OrderinAscDate}

                <Tab.Container id="list-group-tabs" defaultActiveKey={`#${this.state.projects[0].id}`}>
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                {RenderingListGroupItem}
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                {RenderingTabPane}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

export default Projects;