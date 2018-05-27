import React, { Component } from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from './Home'

const URLS = [
  "http://terebinthgroup.com/wp-json/wp/v2/homepage_provide?",
  "http://terebinthgroup.com/wp-json/wp/v2/homepage_top?",
  "http://terebinthgroup.com/wp-json/wp/v2/carousel?",
  "http://terebinthgroup.com/wp-json/wp/v2/customer_boxes?",
  "http://terebinthgroup.com/wp-json/wp/v2/homepage_bottom?",
  "http://terebinthgroup.com/wp-json/wp/v2/leadership_carousel?",
]
class App extends Component {

  state = {
    pages: [],
  }

  componentDidMount() {
    Promise.all(URLS.map((url) => fetch(url)))
      .then(responses => Promise.all(responses.map(res => res.json())))
        .then(res => {
          const merged = [].concat.apply([], res)
          this.setState({ pages: merged })
        })
  }

  render() {
    return (
      <Router>
      {this.state.pages.length > 0 ? (
        <div>
          <Header />
          <Switch>
              <Route path="/" exact render={() => <Home pages={this.state.pages}/>}/>
              <Route path="/contact" exact render={() => <Contact/> }/>
              <Route render={() => { return <Redirect to="/" /> }} />
          </Switch>
        </div>
      ) : null}
      </Router>
    );
  }
}

export default App;
