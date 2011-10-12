import React from 'react';
import {withRouter} from 'react-router-dom';
class LoginForm extends React.Component {
  render(){
    return(
      <a href="/auth/google_oauth2" onClick={()=>this.props.login()}>Sign in with Google</a>
    );
  }
}

export default withRouter(LoginForm);
