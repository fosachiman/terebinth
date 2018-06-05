import React, { Component } from 'react';

class DescribeButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( <div >{this.props.value}</div> )
    }
}
 
export default DescribeButton;