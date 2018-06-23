import React, { Component } from 'react';
import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import { Spring } from 'react-spring';
import Waypoint from 'react-waypoint';

class MiddleProvide extends Component {
    constructor(props) {
        super(props);

        this.left = props.left ? '-450px' : '450px';
        this.top = '100px';
        this.carouselLeft = !props.left ? '-100px' : '100px';


        this.initialStyle = {
            opacity: 0,
            transform: `translate(${this.left}, ${this.top})`,
        }

        this.scrolledStyle = {
            opacity: 1,
            transform: 'translate(0px, 0px)'
        }
        this.initialStyleCarousel = {
            opacity: 0,
            transform: `translate(${this.carouselLeft}, ${this.top})`,
        }

        this.scrolledStyleCarousel = {
            opacity: 1,
            transform: 'translate(0px, 0px)'
        }
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
                <Spring from={this.initialStyle} to={!this.state.entered ? this.initialStyleCarousel : this.scrolledStyleCarousel}> 
                    {styles => (
                            <div style={{...styles, order: this.props.left ? 1 : 2}} className="provide-carousel-container">
                                <Carousel images={[this.props.carousel]}/>
                            </div>
                        )}
                </Spring>
                <Spring from={this.initialStyle} to={!this.state.entered ? this.initialStyle : this.scrolledStyle}> 
                    {styles => (
                            <div style={{order: this.props.left ? 2 : 1}} className="provide-text-container">
                                <div style={styles}>    
                                    <h4 className="middle-provide-title">{this.props.page.acf.title}</h4>
                                    <div className={`middle-gradient ${this.props.left ? '' : 'right'}`} />
                                    <Waypoint key={this.props.page.acf.title} onEnter={this.handleEnter}/>
                                    <div className="middle-provide-text" dangerouslySetInnerHTML={{__html: this.props.page.acf.blurb}} />
                                    <Link to="/contact">
                                        <button className="provide-button">Contact Us</button>
                                    </Link>
                                </div>
                            </div>
                        )}
                </Spring>
                </div> 
            </div>
        )
    }
}
 
export default MiddleProvide;