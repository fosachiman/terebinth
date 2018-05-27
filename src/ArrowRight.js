import React, { Component } from 'react';


class ArrowRight extends Component {
    render() { 
        return (
            <img
                style={{height: '40px', width: '45px'}}
                src={require("./RightArrow.svg")}
                onClick={() => this.props.nextSlide()}
          />
        )
    }
}
 
export default ArrowRight;


