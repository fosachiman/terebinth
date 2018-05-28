import React, { Component } from 'react';

class DescribeButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.formState)
        return ( <div >{this.props.value}</div> )
    }
}
 
export default DescribeButton;