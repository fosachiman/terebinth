import React, { Component } from 'react';
import HeaderLink from './HeaderLink';


class Header extends Component {
    
    constructor(props) {
        super(props);

        this.page = this.findPage('header')
    }

    findPage = (pageTitle) => {
        const pages = this.props.pages.filter((page) => page.type === pageTitle)
        return pages
      }

    render() {
        return ( 
            <header className="header" >
                <div className="header-inner-container">
                    <img className="header-logo" src={this.page[0].acf['header-logo']} alt="terebinth logo" />
                    <div className="header-links">
                        <HeaderLink link={"/"} className="header-button" >About</HeaderLink>
                        <HeaderLink link={"/services"} className="header-button">Services</HeaderLink>
                        <HeaderLink link={"/contact"} className="header-button">Contact</HeaderLink>
                    </div>
                </div>
                <div className="header-bottom"></div>
            </header> )
    }
}
 
export default Header;