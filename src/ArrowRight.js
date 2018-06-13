import React, { Component } from 'react';


class ArrowRight extends Component {
    render() { 
        return (
            <div onClick={() => this.props.nextSlide()}>
                <svg style={{height: '40px', width: '45px', cursor: 'pointer'}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 124 145" xmlSpace="preserve">
                <path fill={"#FFFFFF"} d="M97.7,75.8l-64.8,64.7c-2,2-5.2,2-7.2,0c-2-2-2-5.2,0-7.2l61.2-61.1L25.7,11.1c-2-2-2-5.2,0-7.2
                    c2-2,5.2-2,7.2,0l64.8,64.7C99.7,70.6,99.7,73.8,97.7,75.8z"/>
                </svg>
            </div>
        )
    }
}
 
export default ArrowRight;


