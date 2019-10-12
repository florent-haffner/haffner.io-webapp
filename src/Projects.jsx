import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

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
        if (isLoading) { return <p className="text-center">Fetching data from Github.</p> }
        const projectList = projects.map((data => {
            return (
                <tr key={data.id}>
                    <td className={"text-center"}><a href={data.html_url}>
                        {data.name}</a>
                    </td>
                    <td className={"text-center"}>{data.language}</td>
                    <td>{data.description}</td>
                </tr>
            );
        }))

        return (
            <div className="col-6">
                <h3>Projects</h3>
                <p>A list of project</p>
                <Table>
                    <thead>
                        <tr>
                            <th className={"text-center"}>Name</th>
                            <th className={"text-center"}>Language</th>
                            <th className={""}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectList}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Projects;