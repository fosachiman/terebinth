import React, { Component } from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from './Home'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
        <Header />
            <Switch>
                <Route path="/" component={ Home } exact />
                <Route render={() => { return <Redirect to="/" /> }} />
            </Switch> 
        </div>
      </Router>
    );
  }
}

export default App;
