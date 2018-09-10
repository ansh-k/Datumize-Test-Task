import React from 'react';
import styled from "styled-components";

const H3 = styled.h3`
 `

const Div = styled.div`
  margin: 1em;
`

const Table = styled.table`
  padding: 1em;

  > tbody tr td, thead tr th {
    padding: 1em;
    border: 1px solid #cecece;
  }
`

const Select = styled.select`
 width: 30%;
 padding: 0.5em;
 display: flex;
 margin-bottom: 1em;
`

const Button = styled.button`
  padding: 0.5em;
  color: #fff;
  background-color: #369acf;
`

class HandleUserRoles extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedProject: '',
      selectedRole: ''
    }
  }

  componentDidMount () {
    this.props.requestCurrentUser(this.props.match.params.id);
    this.props.requestData('roles');
    this.props.requestData('projects');
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  assignProjectRole = () => {
    const { selectedProject, selectedRole } = this.state;
    const { projects, roles, currentUser } = this.props;
    if(selectedProject === "" || selectedRole === "" ) {
      alert("Select project and role");
      return;
    }
    const project = projects.find(p => p.id === parseInt(selectedProject)); 
    const role = roles.find(r => r.id === parseInt(selectedRole));
    const assignedProject = { id: project.id, name: project.name, role: { id: role.id, name: role.name } }
    let user = { ...currentUser };
    if(user.assignedProjects.length > 0) {
      user.assignedProjects.push(assignedProject);
    } else {
      user.assignedProjects = [assignedProject];
    }
    this.props.assignProject({ id: currentUser.id, user })
  }

  filterUnassignProjects() {
    const { projects, currentUser: { assignedProjects }} = this.props;
    if(assignedProjects && assignedProjects.length > 0)
      return projects.filter(p => !assignedProjects.map(ap => ap.name).includes(p.name));
    else
      return projects;
  }

  render () {
    const { currentUser, roles } = this.props;
    const { selectedProject, selectedRole } = this.state;

    const unassignProjects = this.filterUnassignProjects();

    return (
      <Div>
        <H3>{currentUser.name} projects</H3>
        <Table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
          {currentUser.assignedProjects && currentUser.assignedProjects.map(project =>
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.role.name}</td>
            </tr>
          )}
          </tbody>
        </Table>
        <div>
          <H3>Assign new project and role</H3>
          <label>Projects: </label>
          {unassignProjects && 
            <Select name="selectedProject" onChange={this.handleChange} value={selectedProject}>
              <option>-Select Project-</option>
              {unassignProjects.map(project =>
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              )}
            </Select>
          }
          <label>Roles: </label>
          <Select name="selectedRole" onChange={this.handleChange} value={selectedRole}>
            <option>-Select Role-</option>
            {roles.map(role =>
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            )}
          </Select>
          <Button onClick={this.assignProjectRole}>Assign</Button>
        </div>
      </Div>
    );
  }
}

export default HandleUserRoles;
