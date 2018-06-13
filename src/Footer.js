import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.page = this.props.page;

        this.initial = {...this.page[0].acf};
        this.links = Object.keys(this.initial).filter((thing) => thing.match(/link\d$/));
        this.actualLinks = this.links.filter((link) => this.initial[link]);
    }   

    render() { 
        return ( 
            <footer className="footer">
                <div className="footer-flex-container">
                    <div className="footer-1">
                        <h4>Explore this website.</h4>
                        <div className="footer-line" />
                        <Link className="footer-link" to="/">Home</Link>
                        <Link className="footer-link" to="/partners">Partners & Resources</Link>
                        <Link className="footer-link" to="/contact">Contact</Link>
                    </div>
                    <div className="footer-2">
                        <h4>Contact us.</h4>
                        <div className="footer-line" />
                        <div dangerouslySetInnerHTML={{__html: this.page[0].acf.address}} />
                        <div><a href={`mailto:${this.page[0].acf.email}`}>{this.page[0].acf.email}</a></div>
                    </div>
                    <div className="footer-3">
                        <h4>Stay updated with us.</h4>
                        <div className="footer-line" />
                        {this.actualLinks.map((link, i) => (
                            <a className="footer-link" target="_blank" key={link} href={link}>{this.initial[`${link}-title`]}</a>
                        ))}
                    </div>
                </div>    
           </footer> 
        )
    }
}
 
export default Footer;