import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import GreetingContainer from './main_page/greeting_container';
const App = () => (
  <div>
    <Switch>
    <Route exact path="/" component={GreetingContainer} />
    </Switch>
  </div>
);
export default App;
