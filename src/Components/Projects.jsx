import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
        if (isLoading) { return <div className="spinner-border justify-content-center" role="status" /> }
        // eslint-disable-next-line
        const MappingThroughProject = projects.map(((data, i) => {
            if (i >= 0 && i <= 5) {
                return (
                    <div className="card bg-dark text-white mt-2 mb-2" key={data.id}>
                        <div className="card-body">
                            <h4 className="card-title"><a href={data.html_url}>{data.name}</a>
                            </h4>
                            <span className="card-subtitle text-muted">{data.language}</span>
                        </div>
                    </div>
                )
            };
        }))

        return (
            <div className="col-3">
                <h3 className="mb-4">Last public projects</h3>

                {MappingThroughProject}

                <Button
                    variant="outline-primary"
                    className="mt-3"
                    href="https://github.com/nelth-fr"> Overview
                </Button>
            </div>
        );
    }
}

export default Projects;