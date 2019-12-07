import React, { Component } from 'react';
import { Button, Card, Row, Col, Tab, ListGroup } from 'react-bootstrap';
import TextSpacer from '../components/TextSpacer'
import MiniSpacer from '../components/MiniSpacer';

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

        // eslint-disable-next-line
        const RenderingListGroupItem = projects.map(((data, i) => {
            if (i >= 0 && i < 6) {
                return (
                    <ListGroup.Item action href={`#${data.id}`} key={data.id}>
                        {data.name}
                    </ListGroup.Item>
                )
            }
        }))

        const RenderingTabPane = projects.map((data => {
            if (data.homepage !== "") { // If there is a deployement link
                return (
                    <Tab.Pane eventKey={`#${data.id}`} key={data.id}>
                        <Card.Text><small className="text-muted">
                            {data.language}</small>
                        </Card.Text>
                        <TextSpacer>
                            {data.description}
                        </TextSpacer>
                        <p><Button variant="dark" 
                            href={data.html_url}>Explore the code</Button></p>
                        <p><Button variant="success" 
                            href={data.homepage}>View deployement</Button></p>
                        <Card.Text><small className="text-muted">
                            Deployement on Heroku may take until 15s to resume.</small>
                        </Card.Text>
                    </Tab.Pane>
                )
            } else {
                return (
                    <Tab.Pane eventKey={`#${data.id}`} key={data.id}>
                        <Card.Text><small className="text-muted">
                            {data.language}</small>
                        </Card.Text>
                        <TextSpacer>
                            {data.description}
                        </TextSpacer>
                        <Button variant="dark" href={data.html_url}>Exploring the code</Button>
                    </Tab.Pane>
                )
            }
        }))

        return (
            <MiniSpacer>
                <TextSpacer>
                    <h4>Last GitHub ventures</h4>
                </TextSpacer>
                <Tab.Container
                    id="list-group-tabs"
                    defaultActiveKey={`#${this.state.projects[0].id}`}
                >
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
            </MiniSpacer>
        );
    }
}

export default Projects;
