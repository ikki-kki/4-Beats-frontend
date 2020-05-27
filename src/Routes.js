import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main'
import SignInUp from './pages/SignInUp/SignInUp'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignInUp} />
        </Switch>
      </Router>
    )
  }
}
export default Routes;

