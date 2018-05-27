import React, { Component } from 'react';
import HeaderLink from './HeaderLink';
import ContactLink from './ContactLink';

const URLS = [
    "http://terebinthgroup.com/wp-json/wp/v2/header?",
  ]

class Header extends Component {
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

    render() {
        return ( 
            <header className="header" >
                <div className="header-inner-container">
                    {this.state.pages.length > 0 && <img className="header-logo" src={this.state.pages[0].acf['header-logo']} alt="terebinth logo" />}
                    <div className="header-links">
                        <HeaderLink link={"/"} className="header-button" >About</HeaderLink>
                        <HeaderLink link={"/services"} className="header-button">Services</HeaderLink>
                        <ContactLink className="header-button">Contact</ContactLink>
                    </div>
                </div>
                <div className="header-bottom"></div>
            </header> )
    }
}
 
export default Header;