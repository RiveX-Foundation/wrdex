import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LazyRoute from 'lazy-route';
// import Landing from './Landing';
// import Main from './Main';
export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Router>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <LazyRoute {...props} component={import('./Landing')} />
                )}
              />
              <Route
                path='/main'
                render={props => (
                  <LazyRoute {...props} component={import('./Main')} />
                )}
              />
            </Switch>
        </Router>
      </div>
    );
  }
}

