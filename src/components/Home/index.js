import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Home extends React.Component {
  render () {
    const StyledWrapper = styled.div`
      text-align: center;
      padding: 10px;
    `;
    return (
      <StyledWrapper>
        <div>
          <h1><Link to='/list/users'>Users</Link></h1>
        </div>
        <div>
          <h2><Link to='/list/projects'>Projects</Link></h2>
        </div>
        <div>
          <h3><Link to='/list/roles'>Roles</Link></h3>
        </div>
      </StyledWrapper>
    );
  }
}

export default Home;
