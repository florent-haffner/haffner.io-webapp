import React, { Component } from 'react'
import { Container } from '../components/Container'
import { Row, Col } from 'react-bootstrap'

class Interest extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row className="justify-content-md-center text-center">
                        <Col>
                            <h5>Engineering</h5>
                    </Col>
                        <Col>
                            <h5>Design & Communication</h5>
                    </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Interest