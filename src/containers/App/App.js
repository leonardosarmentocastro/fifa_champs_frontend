import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import configureShared from '../../shared';
import NavigationContainer from '../NavigationContainer';
import ResultsPageContainer from '../ResultsPageContainer';
import RouteChangeListenerContainer from '../RouteChangeListenerContainer';
import {
  signupAPI,
  SignupPageContainer,
  signupValidator,
} from '../SignupPageContainer';
import '../../shared/styles/font-faces.scss';
import '../../shared/styles/variables.scss';
import '../../shared/styles/props-for-page.scss';
import './App.styles.scss';

class App extends Component {
  componentDidMount() {
    configureShared.singletons();
  }

  render() {
    return (
      <Router>
        <RouteChangeListenerContainer>
          <NavigationContainer />

          <Switch>
            <Route
              exact path={'/results'}
              render={() => <ResultsPageContainer />}
            />

            <Route
              exact path={'/sign_up'}
              render={() => <SignupPageContainer
                signupAPI={signupAPI}
                signupValidator={signupValidator}
              />}
            />

            <Route
              render={() => <Redirect to={'/sign_up'} />}
            />
          </Switch>
        </RouteChangeListenerContainer>
      </Router>
    );
  }
}

export default App;
