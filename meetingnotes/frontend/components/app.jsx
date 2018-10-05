import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
    <Route exact path="/" component={LandingPage} />
    <Redirect to="/" />
    </Switch>
  </div>
);
export default App;
