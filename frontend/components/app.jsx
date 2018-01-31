import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_utils';

import NavBarContainer from './navbar/navbar_container';
import TempPage from './temp';
import SessionFormContainer from './session/session_container';
import NotFoundComponent from './not_found';
import Footer from './footer/footer';

const App = () => (
  <React.Fragment>
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={TempPage} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route component={NotFoundComponent} />
    </Switch>
    <Footer />
  </React.Fragment>
);

export default App;