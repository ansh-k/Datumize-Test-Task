import { connect } from 'react-redux';
import Roles from '../components/Roles/';
import { requestData } from '../actions';

const mapStateToProps = state => ({
  roles: state.role.roles,
});

const mapDispatchToProps = {
  requestData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Roles);
