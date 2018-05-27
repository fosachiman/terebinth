import React, { Component } from 'react';
import Carousel from './Carousel'
class MiddleProvide extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.page) 
        return ( 
            <div className="middle-provide">
                <div style={{order: this.props.left ? 1 : 2}} className="provide-carousel-container">
                    <Carousel images={[this.props.carousel]}/>
                </div>
                <div style={{order: this.props.left ? 2 : 1}} className="provide-text-container">
                    <h4 className="middle-provide-title">{this.props.page.acf.title}</h4>
                    <div className="middle-gradient" />
                    <div className="middle-provide-text" dangerouslySetInnerHTML={{__html: this.props.page.acf.blurb}} />
                    <button className="provide-button">Contact Us</button>
                </div>
            </div> 
        )
    }
}
 
export default MiddleProvide;