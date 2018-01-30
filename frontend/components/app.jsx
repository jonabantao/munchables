import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './navbar/navbar';
import TempPage from './temp';
import SessionFormContainer from './session/session_container';
import NotFoundComponent from './not_found';

const App = () => (
  <main>
    <NavBar />
    <Switch>
      <Route exact path="/" component={TempPage} />
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
      <Route component={NotFoundComponent} />
    </Switch>
    {/* Footer */}
  </main>
);

export default App;