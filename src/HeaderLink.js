import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';

const scroller = Scroll.scroller;
class HeaderLink extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleScroll = (name) => {
        scroller.scrollTo(`${name.toLowerCase()}`, {
            duration: 750,
            delay: 50,
            smooth: true,
            offset: -65
          })
    }

    render() {
        const underline = {
            borderBottom: '5px solid rgb(78, 177, 213)'
        } 
        return ( this.props.link ? 
            <Link className={this.props.className} to={this.props.link}>{this.props.children}</Link>
        :  <div style={this.props.position === this.props.children ? underline : null}className={this.props.className} onClick={() => this.handleScroll(`${this.props.children}`)}>{this.props.children}</div>)
    }
}
 
export default HeaderLink;