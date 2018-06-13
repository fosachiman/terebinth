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

    handleClick = () => {
        const fourLetters = this.props.page.acf.header.substring(0,4);
        this.props.changeContact(fourLetters)
    }

    render() {
        const gradient = this.state.hover ? {
            backgroundImage: "linear-gradient( 180deg, rgb(15,117,188) 0%, rgba(15,117,188) 100%)",
        } : 
        {
            backgroundImage: "linear-gradient( 135deg, rgb(15,117,188) 0%, rgba(15,117,188,0.74902) 100%)",

        }
        const { page } = this.props 
        return ( 
            <Link to={'/contact'} onClick={() => this.handleClick()}>
                <div className="customer-box"  onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style={{...this.props.style, ...gradient}}>
                    <div className="customer-box-text-container" style={{top: this.state.hover ? 'calc(50% - 5px)' : '50%'}}>
                        <h3 className="customer-box-header">{page.acf.header}</h3>
                        <div className="customer-box-line" />
                        <div className="customer-box-text" dangerouslySetInnerHTML={{__html: page.acf.text}} />
                        <button style={{opacity: this.state.hover ? '1' : '0'}} className="customer-box-button">Contact Us</button>
                    </div>
                </div>
            </Link>
        )
    }
}
 
export default CustomerBox;