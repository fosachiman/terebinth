import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.page = this.findPage('contact_us')
    }

    findPage = (pageTitle) => {
        const pages = this.props.pages.filter((page) => page.type === pageTitle)
        return pages
    }



    render() { 
        console.log(this.page)
        return ( 
            <div className="contact">
                <h1 className="contact-header">{this.page[0].acf.header}</h1>
                <div className="contact-text" dangerouslySetInnerHTML={{__html: this.page[0].acf.subheader}} />
                <ContactForm page={this.page[0].acf}/>
            </div> 
        )
    }
}
 
export default Contact;