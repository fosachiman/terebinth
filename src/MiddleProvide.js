import React, { Component } from 'react';
import Carousel from './Carousel'
import { Link } from 'react-router-dom'
class MiddleProvide extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <div className="middle-provide">
                <div style={{order: this.props.left ? 1 : 2}} className="provide-carousel-container">
                    <Carousel images={[this.props.carousel]}/>
                </div>
                <div style={{order: this.props.left ? 2 : 1}} className="provide-text-container">
                    <h4 className="middle-provide-title">{this.props.page.acf.title}</h4>
                    <div className="middle-gradient" />
                    <div className="middle-provide-text" dangerouslySetInnerHTML={{__html: this.props.page.acf.blurb}} />
                    <Link to="/contact">
                        <button className="provide-button">Contact Us</button>
                    </Link>
                </div>
            </div> 
        )
    }
}
 
export default MiddleProvide;