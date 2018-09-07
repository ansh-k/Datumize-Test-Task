import { connect } from 'react-redux';
import HandleUserRoles from '../components/HandleUserRoles/';
import { requestData, requestCurrentUser, setCurrentUser } from '../actions';

const mapStateToProps = state => ({
  projects: state.project.projects,
  roles: state.role.roles,
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = {
  requestData,
  requestCurrentUser,
  setCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HandleUserRoles);
