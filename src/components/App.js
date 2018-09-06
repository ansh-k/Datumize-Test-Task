import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './Home/';
import Users from '../containers/Users';
import Roles from '../containers/Roles';
import Projects from '../containers/Projects';
import HandleUserRoles from '../containers/HandleUserRoles';

class App extends Component {
  render() {
    return (
        <div>
          <Router>
            <div>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/list/users" component={Users}></Route>
              <Route exact path="/list/roles" component={Roles}></Route>
              <Route exact path="/list/projects" component={Projects}></Route>
              <Route exact path="/edit/user/:id" component={HandleUserRoles}></Route>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
