import React from 'react';
import { Link } from 'react-router-dom';

class Users extends React.Component {

  componentDidMount () {
    this.props.requestData('users');
  }

  render () {
    return (
      <div>
        {this.props.users.map(user =>
          <div key={user.id}>
            <div>{user.name}</div>
            <Link to={`/edit/user/${user.id}`}>Edit</Link>
          </div>
        )}
      </div>
    );
  }
}

export default Users;
