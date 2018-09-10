import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const H1 = styled.h1`
  margin: 1em;
`
const Table = styled.table`
  margin: 1em;
  padding: 1em;

  > tbody tr td, thead tr th {
    padding: 1em;
    border: 1px solid #cecece;
  }
`

class Users extends React.Component {

  componentDidMount () {
    this.props.requestData('users');
  }

  render () {
    return (
      <div>
      <H1>List User</H1>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user =>
              <tr key={user.id}>
                <td>{user.name}</td>
                <td><Link to={`/edit/user/${user.id}`}>Assign Project</Link></td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Users;
