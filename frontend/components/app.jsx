import React from 'react';
import {
  Switch, 
  Route 
} from 'react-router-dom';
import NavBar from './navbar/navbar';
import TempPage from './temp';
import TempLoginPage from './temp_login';
import NotFoundComponent from './not_found';

const App = () => (
  <main>
    <NavBar />
    <Switch>
      <Route exact path="/" component={TempPage} />
      <Route path="/login" component={TempLoginPage} />
      <Route component={NotFoundComponent} />
    </Switch>
  </main>
);

export default App;