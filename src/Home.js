import React, { Component } from 'react';
import './CSS/App.css';
import HomepageTop from './HomepageTop';
import ProvideSection from './ProvideSection';
import CustomerBoxes from './CustomerBoxes';
import HomepageBottom from './HomepageBottom';

const URLS = [
  "http://terebinthgroup.com/wp-json/wp/v2/homepage_provide?",
  "http://terebinthgroup.com/wp-json/wp/v2/homepage_top?",
  "http://terebinthgroup.com/wp-json/wp/v2/carousel?",
  "http://terebinthgroup.com/wp-json/wp/v2/customer_boxes?",
  "http://terebinthgroup.com/wp-json/wp/v2/homepage_bottom?"
]

class Home extends Component {

  state = {
    pages: []
  }

  componentDidMount() {
    Promise.all(URLS.map((url) => fetch(url)))
      .then(responses => Promise.all(responses.map(res => res.json())))
        .then(res => {
          const merged = [].concat.apply([], res)
          this.setState({ pages: merged })
        })
  }

  findPage = (pageTitle) => {
    const copyState = {...this.state};
    const pages = copyState.pages.filter((page) => page.type === pageTitle)
    return pages
  }

  render() {
    console.log(this.state.pages)
    return (
      this.state.pages.length > 0 ? (
        <div className="App">
          <HomepageTop page={this.findPage('homepage_top')} />
          <ProvideSection pages={this.findPage('homepage_provide')} />
          <CustomerBoxes pages={this.findPage('customer_boxes')} />
          <HomepageBottom page={this.findPage('homepage_bottom')} />
        </div>
      ) : null
    );
  }
}

export default Home;