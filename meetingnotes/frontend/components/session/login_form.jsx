import React from 'react';
import {withRouter} from 'react-router-dom';
class LoginForm extends React.Component {
  render(){

    return(
      <button onClick={this.props.login()}>Sign in with Google</button>
    );
  }
}

export default withRouter(LoginForm);
