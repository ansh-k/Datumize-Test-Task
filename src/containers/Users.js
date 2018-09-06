import { connect } from 'react-redux';
import Users from '../components/Users/';
import { requestData } from '../actions';

const mapStateToProps = state => ({
  users: state.user.users,
});

const mapDispatchToProps = {
  requestData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
