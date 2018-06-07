import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SinglePartner extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className="single-partner">
                <h2 className="partner-title">{this.props.partner.acf.name}</h2>
                <div className="partner-desc" dangerouslySetInnerHTML={{__html: this.props.partner.acf.description}} />
                <a className="partner-link" target="_blank" href={this.props.partner.acf.website}>Visit Website</a>
            </div> 
        )
    }
}
 
export default SinglePartner;