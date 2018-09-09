import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import NavigationContainer from '../NavigationContainer';
import ResultsPageContainer from '../ResultsPageContainer';
import SignupPageContainer from '../SignupPageContainer';
import '../../shared/styles/font-faces.css';
import '../../shared/styles/variables.css';
import '../../shared/styles/props-for-page.css';
import './App.styles.css';

class App extends Component {
  render() {
    return (
        <Router>
          <Fragment>
            <NavigationContainer />

            <Switch>
              <Route
                exact path={'/results'}
                render={() => <ResultsPageContainer />}
              />

              <Route
                exact path={'/sign_up'}
                render={() => <SignupPageContainer />}
              />

              <Route
                render={() => <Redirect to={'/sign_up'} />}
              />
            </Switch>
          </Fragment>
        </Router>
    );
  }
}

export default App;