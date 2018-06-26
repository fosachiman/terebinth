import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class TopBottomProvide extends Component {

    constructor() {
        super();
    }

    state = {
        entered: false
    }

    handleEnter = () => {
        this.props.changePosition('Services')
        this.setState({ entered: true })
    }

    render() {
        return ( 
            <div>
                <div className={`top-bottom-provide ${this.state.entered ? 'active' : ''}`} >
                    <div className="top-bottom-left">
                        <h3 className="top-bottom-title">{this.props.page[0].acf.title}</h3>
                        <div className="gradient-line-left" />
                    </div>
                    <div className="top-bottom-right">
                        <div className="gradient-line-right" />
                        <div className="top-bottom-text" dangerouslySetInnerHTML={{__html: this.props.page[0].acf.blurb}} />
                    </div>            
                </div>  
                <Waypoint key={this.props.page[0].acf.title} onEnter={this.handleEnter}/>
            </div>
        )
    }
}
 
export default TopBottomProvide;