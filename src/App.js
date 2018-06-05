import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './Home';
import Contact from './Contact';
import Partners from './Partners';

const URLS = [
  "http://terebinthgroup.com/wp-json/wp/v2/homepage_provide?",
  "http://terebinthgroup.com/wp-json/wp/v2/homepage_top?",
  "http://terebinthgroup.com/wp-json/wp/v2/carousel?",
  "http://terebinthgroup.com/wp-json/wp/v2/customer_boxes?",
  "http://terebinthgroup.com/wp-json/wp/v2/homepage_bottom?",
  "http://terebinthgroup.com/wp-json/wp/v2/leadership_carousel?",
  "http://terebinthgroup.com/wp-json/wp/v2/header?",
  "http://terebinthgroup.com/wp-json/wp/v2/contact_us?",
  "http://terebinthgroup.com/wp-json/wp/v2/partners_page?",
  "http://terebinthgroup.com/wp-json/wp/v2/footer?"
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
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={400}>
                <Switch location={location}>
                    <Route path="/" exact render={(props) => <Home pages={this.state.pages} {...props}/>}/>
                    <Route path="/contact" exact render={(props) => <Contact pages={this.state.pages} {...props}/> }/>
                    <Route path="/partners" exact render={(props) => <Partners pages={this.state.pages} {...props}/> }/>
                    <Route render={() => { return <Redirect to="/" /> }} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </div>
      ) : null}
      </Router>
    );
  }
}

export default App;