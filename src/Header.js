import React, { Component } from 'react';
import HeaderLink from './HeaderLink';
import { Link } from 'react-router-dom';

class Header extends Component {
    
    constructor(props) {
        super(props);

        this.page = this.props.page
    }

    render() {
        return ( 
            <header className="header" >
                <div className="header-inner-container">
                    <Link to="/">
                        <img className="header-logo" src={this.page[0].acf['header-logo']} alt="terebinth logo" />
                    </Link>
                    <div className="header-links">
                        <HeaderLink className="header-button" >About</HeaderLink>
                        <HeaderLink className="header-button">Services</HeaderLink>
                        <HeaderLink link={"/contact"} className="header-button">Contact</HeaderLink>
                    </div>
                </div>
                <div className="header-bottom"></div>
            </header> )
    }
}
 
export default Header;