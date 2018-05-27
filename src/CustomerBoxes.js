import React, { Component } from 'react';
import CustomerBox from './CustomerBox';

class CustomerBoxes extends Component {
    render() {
        const numberOf = 100 / this.props.pages.length;
        console.log(this.props.pages) 
        return ( 
            <div className="customer-boxes">
                {this.props.pages.map((page) => (
                    <CustomerBox key={page.id} style={{width: `${numberOf}vw`, height: `${numberOf}vw`}} page={page}/>
                ))}    
            </div> 
        )
    }
}
 
export default CustomerBoxes;