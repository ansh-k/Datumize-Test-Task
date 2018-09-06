import { connect } from 'react-redux';
import Projects from '../components/Projects/';
import { requestData } from '../actions';

const mapStateToProps = state => ({
  projects: state.project.projects,
});

const mapDispatchToProps = {
  requestData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
