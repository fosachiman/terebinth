import React, { Component } from 'react';

class ArrowLeft extends Component {
    render() { 
        return ( 
            <img
                style={{height: '40px', width: '45px'}}
                src={require("./LeftArrow.svg")}
                onClick={() => this.props.previousSlide()}
          />
         )
    }
}
 
export default ArrowLeft;


