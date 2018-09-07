import React from 'react';

class HandleUserRoles extends React.Component {

  componentDidMount () {
    this.props.requestCurrentUser(this.props.match.params.id);
    this.props.requestData('roles');
  }

  handleRoleChange (event, project) {
    const role = this.props.roles.find(r => r.id.toString() === event.target.value);
    let changedProject = project;
    changedProject.role = role;
    const currentUser = { ...this.props.currentUser };
    currentUser.assignedProjects.splice(currentUser.assignedProjects.indexOf(project), 1, changedProject);
    this.props.setCurrentUser(currentUser);
  }

  render () {
    const { currentUser } = this.props;
    return (
      <div>
        <h1>{currentUser.name}</h1>
        <button>Save</button>
        <div>
          {currentUser.assignedProjects && currentUser.assignedProjects.map(project =>
            <div key={project.id}>
              <span>{project.name}</span>
              <select onChange={(event) => this.handleRoleChange(event, project)} value={project.role.id}>
                {this.props.roles.map(role =>
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                )}
              </select>
              <span>{project.role.name}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HandleUserRoles;
