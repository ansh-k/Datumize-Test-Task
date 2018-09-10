import { connect } from 'react-redux';
import HandleUserRoles from '../components/HandleUserRoles/';
import { requestData, requestCurrentUser, setCurrentUser, assignProject } from '../actions';

const mapStateToProps = state => ({
  projects: state.project.projects,
  roles: state.role.roles,
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = {
  requestData,
  requestCurrentUser,
  setCurrentUser,
  assignProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(HandleUserRoles);
