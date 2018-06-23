import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ScrollToTopOnMount from './ScrollToTop';
import { Link } from 'react-router-dom';
class Contact extends Component {
    constructor(props) {
        super(props);

        this.page = this.findPage('contact_us')
    }

    state = {
        closeHover: false
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    findPage = (pageTitle) => {
        const pages = this.props.pages.filter((page) => page.type === pageTitle)
        return pages
    }

    mouseEnter = () => {
        this.setState({ closeHover: true })
    }

    mouseLeave = () => {
        this.setState({ closeHover: false })
    }

    render() { 
        const { closeHover } = this.state;
        return ( 
            <div className="contact">
                <ScrollToTopOnMount />
                <Link to="/">
                    <div className="contact-close-button" 
                    onMouseEnter={this.mouseEnter} 
                    onMouseLeave={this.mouseLeave}
                    >
                        <svg 
                            xmlns="//www.w3.org/2000/svg"
                            xmlnsXlink="//www.w3.org/1999/xlink"
                            width="59px" height="59px">
                            <path fillRule="evenodd"  stroke={closeHover ? "white" : "rgb(15, 117, 188)"} strokeWidth="2px" strokeLinecap="butt" strokeLinejoin="miter" fill={closeHover ? "rgb(15, 117, 188)" : "none"}
                            d="M29.000,1.000 C44.464,1.000 57.000,13.536 57.000,29.000 C57.000,44.464 44.464,57.000 29.000,57.000 C13.536,57.000 1.000,44.464 1.000,29.000 C1.000,13.536 13.536,1.000 29.000,1.000 Z"/>
                            <path fillRule="evenodd"  fill={closeHover ? "rgb(255,255,255)" : "rgb(15, 117, 188)"}
                            d="M19.242,17.545 L40.455,38.758 L38.758,40.455 L17.545,19.242 L19.242,17.545 Z"/>
                            <path fillRule="evenodd"  fill={closeHover ? "white" : "rgb(15, 117, 188)"}
                            d="M17.545,38.758 L38.758,17.545 L40.455,19.242 L19.242,40.455 L17.545,38.758 Z"/>
                        </svg>
                    </div>
                </Link>
                <h1 className="contact-header">{this.page[0].acf.header}</h1>
                <div className="contact-text" dangerouslySetInnerHTML={{__html: this.page[0].acf.subheader}} />
                <ContactForm page={this.page[0].acf}/>
            </div> 
        )
    }
}
 
export default Contact;