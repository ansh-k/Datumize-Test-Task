import React from 'react';

class Roles extends React.Component {

  componentDidMount () {
    this.props.requestData('roles');
  }

  render () {
    return (
      <div>
        {this.props.roles.map(role =>
          <div key={role.id}>
            {role.name}
          </div>
        )}
      </div>
    );
  }
}

export default Roles;
