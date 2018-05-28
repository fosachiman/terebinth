import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CustomerBox extends Component {
    constructor(props) {
        super(props);
        
    }
    state = {
        hover: false
    }

    mouseEnter = () => {
        this.setState({ hover: true })
    }

    mouseLeave = () => {
        this.setState({ hover: false })
    }

    render() {
        const { page } = this.props 
        return ( 
        <div className="customer-box"  onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style={this.props.style}>
            <div className="customer-box-text-container" style={{top: this.state.hover ? 'calc(50% - 5px)' : '50%'}}>
                <h3 className="customer-box-header">{page.acf.header}</h3>
                <div className="customer-box-line" />
                <div className="customer-box-text" dangerouslySetInnerHTML={{__html: page.acf.text}} />
                <Link to={'/contact'}>
                    <button style={{opacity: this.state.hover ? '1' : '0'}} className="customer-box-button">Contact Us</button>
                </Link>
            </div>
        </div> 
    )
    }
}
 
export default CustomerBox;