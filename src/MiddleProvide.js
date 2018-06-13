import React, { Component } from 'react';
import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import { Spring } from 'react-spring';
import Waypoint from 'react-waypoint';

class MiddleProvide extends Component {
    constructor(props) {
        super(props);

        this.left = props.left ? '-1400px' : '1400px'

        this.initialStyle = {
            opacity: .3,
            transform: 'translateX(' + this.left + ')'
        }

        this.scrolledStyle = {
            opacity: 1,
            transform: 'translateX(0px)'
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
                <Spring from={this.initialStyle} to={!this.state.entered ? this.initialStyle : this.scrolledStyle}> 
                    {styles => (
                        <div className="middle-provide" style={styles}>
                            <div style={{order: this.props.left ? 1 : 2}} className="provide-carousel-container">
                                <Carousel images={[this.props.carousel]}/>
                            </div>
                            <div style={{order: this.props.left ? 2 : 1}} className="provide-text-container">
                                <h4 className="middle-provide-title">{this.props.page.acf.title}</h4>
                                <div className="middle-gradient" />
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
        )
    }
}
 
export default MiddleProvide;