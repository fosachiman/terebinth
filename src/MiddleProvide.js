import React, { Component } from 'react';
import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import Waypoint from 'react-waypoint';

class MiddleProvide extends Component {
    constructor(props) {
        super(props);

        this.left = props.left ? '-100px' : '100px';
        this.top = '100px';
        this.carouselLeft = !props.left ? '-450px' : '450px';
    }
    state = {
        entered: false
    }

    handleEnter = () => {
        this.setState({ entered: true })
    }

    render() {
        return (
            <div>
                <div className="middle-provide">
                    <div style={{order: this.props.left ? 1 : 2, transform: `translate(${this.carouselLeft}, ${this.top})`}} className={`provide-carousel-container ${this.state.entered ? 'active' : ''}`}>
                        <Carousel images={[this.props.carousel]}/>
                    </div>
                        <div style={{order: this.props.left ? 2 : 1}} className="provide-text-container">
                            <div style={{transform: `translate(${this.left}, ${this.top})`}} className={`provie-text-container-inner ${this.state.entered ? 'active' : ''}`}>    
                                <h4 className="middle-provide-title">{this.props.page.acf.title}</h4>
                                <div className={`middle-gradient ${this.props.left ? '' : 'right'}`} />
                                <Waypoint key={this.props.page.acf.title} onEnter={this.handleEnter}/>
                                <div className="middle-provide-text" dangerouslySetInnerHTML={{__html: this.props.page.acf.blurb}} />
                                <Link to="/contact">
                                    <button className="provide-button">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                </div> 
            </div>
        )
    }
}
 
export default MiddleProvide;