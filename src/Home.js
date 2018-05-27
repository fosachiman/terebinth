import React, { Component } from 'react';
import './CSS/App.css';
import HomepageTop from './HomepageTop';
import ProvideSection from './ProvideSection';
import CustomerBoxes from './CustomerBoxes';
import HomepageBottom from './HomepageBottom';
class Home extends Component {

  findPage = (pageTitle) => {
    const pages = this.props.pages.filter((page) => page.type === pageTitle)
    return pages
  }

  render() {
    return (
      <div className="App">
        <HomepageTop page={this.findPage('homepage_top')} images={this.findPage('leadership_carousel')}/>
        <ProvideSection pages={this.findPage('homepage_provide')} carousels={this.findPage('carousel')}/>
        <CustomerBoxes pages={this.findPage('customer_boxes')} />
        <HomepageBottom page={this.findPage('homepage_bottom')} />
      </div>
    );
  }
}

export default Home;