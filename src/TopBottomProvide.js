import React, { Component } from 'react';
import { Spring } from 'react-spring';
import Waypoint from 'react-waypoint';

class TopBottomProvide extends Component {

    constructor() {
        super();

        this.initialStyle = {
            opacity: .3,
            transform: 'translateX(1400px)'
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
                        <div className="top-bottom-provide" style={styles}>
                            <div className="top-bottom-left">
                                <h3 className="top-bottom-title">{this.props.page[0].acf.title}</h3>
                                <div className="gradient-line-left" />
                            </div>
                            <div className="top-bottom-right">
                                <div className="gradient-line-right" />
                                <div className="top-bottom-text" dangerouslySetInnerHTML={{__html: this.props.page[0].acf.blurb}} />
                            </div>            
                        </div>  
                )}
                </Spring>
                <Waypoint key={this.props.page[0].acf.title} onEnter={this.handleEnter}/>
            </div>
        )
    }
}
 
export default TopBottomProvide;