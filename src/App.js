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
import ContactContext from './ContactContext';
import SiteLoader from './SiteLoader';

const URLS = [
  "//terebinthgroup.com/wp-json/wp/v2/homepage_provide?",
  "//terebinthgroup.com/wp-json/wp/v2/homepage_top?",
  "//terebinthgroup.com/wp-json/wp/v2/carousel?",
  "//terebinthgroup.com/wp-json/wp/v2/customer_boxes?",
  "//terebinthgroup.com/wp-json/wp/v2/homepage_bottom?",
  "//terebinthgroup.com/wp-json/wp/v2/leadership_carousel?",
  "//terebinthgroup.com/wp-json/wp/v2/header?",
  "//terebinthgroup.com/wp-json/wp/v2/contact_us?",
  "//terebinthgroup.com/wp-json/wp/v2/partners_page?",
  "//terebinthgroup.com/wp-json/wp/v2/resource_list?per_page=100",
  "//terebinthgroup.com/wp-json/wp/v2/footer?"
]

class App extends Component {

  state = {
    pages: [],
    contact: null,
    loader: true
  }

  componentDidMount() {
    Promise.all(URLS.map((url) => fetch(url)))
      .then(responses => Promise.all(responses.map(res => res.json())))
        .then(res => {
          const merged = [].concat.apply([], res)
          this.setState({ pages: merged })
        })
    setTimeout(() => this.setState({ loader: false}), 2000);
  }

  changeContact = (newContact) => {
    this.setState({ contact: newContact })
  }

  render() {
    return (
      <Router>
        <div>
          <SiteLoader active={this.state.loader} />
          {this.state.pages.length > 0 ? (
            <Route render={({ location }) => (
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={400}>
                  <Switch location={location}>
                      <Route path="/" exact render={(props) =>
                          <Home 
                            pages={this.state.pages} 
                            changeContact={this.changeContact} 
                            {...props}/>
                        }
                      />
                      <Route path="/contact" exact render={(props) => (
                        <ContactContext.Provider value={this.state.contact}>
                        <Contact pages={this.state.pages} {...props}/> 
                        </ContactContext.Provider>
                      )}/>
                      <Route path="/partners" exact render={(props) => <Partners pages={this.state.pages} {...props}/> }/>
                      <Route render={() => { return <Redirect to="/" /> }} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
          ) : null}
        </div>
      </Router>
    );
  }
}

export default App;