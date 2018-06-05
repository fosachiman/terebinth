import React, { Component, PureComponent } from 'react';
import './CSS/App.css';
import HomepageTop from './HomepageTop';
import ProvideSection from './ProvideSection';
import CustomerBoxes from './CustomerBoxes';
import HomepageBottom from './HomepageBottom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopOnMount from './ScrollToTop';
class Home extends PureComponent {

  findPage = (pageTitle) => {
    const pages = this.props.pages.filter((page) => page.type === pageTitle)
    return pages
  }

  render() {
    return (
      <div className="App">
        <ScrollToTopOnMount />
        <Header page={this.findPage('header')}/>
        <HomepageTop page={this.findPage('homepage_top')} images={this.findPage('leadership_carousel')}/>
        <ProvideSection pages={this.findPage('homepage_provide')} carousels={this.findPage('carousel')}/>
        <CustomerBoxes pages={this.findPage('customer_boxes')} />
        <HomepageBottom page={this.findPage('homepage_bottom')} />
        <Footer page={this.findPage('footer')}/>
      </div>
    );
  }
}

export default Home;