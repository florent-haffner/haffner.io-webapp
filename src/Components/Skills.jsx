import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Skills extends Component {
    render() {
        return (
            <div className="skills mini-spacer">
                <h4 className="title-spacer">Technical skills</h4>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Framework & Libraries</th>
                            <th>Server & Databases</th>
                            <th>Tools</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Spring & Hibernate</td>
                            <td>JHipster & Keycloak</td>
                            <td>Confluence, JIRA</td>
                        </tr>
                        <tr>
                            <td>React.js, Bootstrap</td>
                            <td>PostgreSQL, MongoDB</td>
                            <td>JetBrains IDE & Vim</td>
                        </tr>
                        <tr>
                            <td>JUnit, Mockito</td>
                            <td>ElasticSearch</td>
                            <td>Git, Bash, Docker</td>
                        </tr>
                        <tr>
                            <td>Unity 3D</td>
                            <td></td>
                            <td>Jenkins & Sonarqube</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Skills;