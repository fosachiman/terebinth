import React, { Component } from 'react';

class ArrowLeft extends Component {
    render() { 
        return ( 
            <div onClick={() => this.props.previousSlide()}>
                <svg style={{height: '40px', width: '45px'}} version="1.1" id="Layer_1" xmlns="//www.w3.org/2000/svg" xmlnsXlink="//www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 124 145" xmlSpace="preserve">
                <path fill={'#FFFFFF'} d="M25.7,68.9L89.9,3.6c2-2,5.2-2,7.2-0.1c2,2,2,5.2,0.1,7.2L36.5,72.4L98.3,133c2,2,2,5.2,0.1,7.2
                    c-2,2-5.2,2-7.2,0.1L25.8,76.1C23.8,74.1,23.7,70.9,25.7,68.9z"/>
                </svg>
            </div>
         )
    }
}
 
export default ArrowLeft;


