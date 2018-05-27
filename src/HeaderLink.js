import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HeaderLink extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <Link className={this.props.className} to={this.props.link}>{this.props.children}</Link> )
    }
}
 
export default HeaderLink;