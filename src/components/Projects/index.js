import React from 'react';

class Projects extends React.Component {

  componentDidMount () {
    this.props.requestData('projects');
  }

  render () {
    return (
      <div>
        {this.props.projects.map(project =>
          <div key={project.id}>{project.name}</div>
        )}
      </div>
    );
  }
}

export default Projects;
