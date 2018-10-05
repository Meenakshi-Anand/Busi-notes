import { connect } from 'react-redux';
import LoginForm from './login_form';
import { googleLogin } from '../../actions/session_actions';
const mapStateToProps = (state,ownProps) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    login: ()=> dispatch(googleLogin())
  };
};


export default connect(mapStateToProps , mapDispatchToProps)(LoginForm);
