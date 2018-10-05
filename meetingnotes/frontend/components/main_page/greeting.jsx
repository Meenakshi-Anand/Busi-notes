import React from 'react';
import {Link} from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';
class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {currentUser, logout} = this.props;

    if (currentUser){
    return  (
      <header>
      <nav>
        Welcome {currentUser.name} !
        <Link  to="/" onClick={logout}>Signout</Link>
      </nav>
      </header>
    ) ;
    }else{
      return (
         <header className="header">
            <nav>
            <Link to={`/`}>
            <h2> connect </h2>
            </Link>
            <LoginFormContainer />
            </nav>
          </header>);
    }
  }
}

export default Greeting;
