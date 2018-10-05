import {logout} from '../../actions/session_actions';
import { connect } from 'react-redux';
import Greeting from './greeting';
const mapStateToProps = (state) => {
  const currentUserId = state.session.id ;
  return (
    {currentUser: state.entities.users[currentUserId],
    users:state.entities.users}

  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps , mapDispatchToProps)(Greeting);
