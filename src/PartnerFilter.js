import React, { Component } from 'react';
import { Spring } from 'react-spring';

class PartnerFilter extends Component {
    constructor(props) {
        super(props);

        this.fromButton = {
            borderColor: 'rgb(15, 117, 188)',
            color: 'rgb(15, 117, 188)',
            background: 'rgba(255,255,255,0)'
        }
        this.activeButton = {
            borderColor: 'rgb(15, 117, 188)',
            color: 'rgb(255, 255, 255)',
            background: 'rgba(15, 117, 188, 1)'

        }
        this.fromClose = {
            background: 'rgb(15, 117, 188)',
            color: 'rgb(255, 255, 255)',
            transform: 'rotate(0deg)'
        }
        this.activeClose = {
            background: 'rgb(255,255,255)',
            color: 'rgb(15, 117, 188)',
            transform: 'rotate(45deg)'
        }
    }
    handleClick = () => {
        this.props.changeFilter(this.props.filter)
    }

    render() { 
        return (
            <Spring from={this.fromButton} to={this.props.filterState[this.props.filter] ? this.activeButton : this.fromButton}> 
                {styles => (
                    <div className="partner-filter" style={styles} onClick={this.handleClick}>
                        <div className="partner-filter-text">{this.props.filter}</div>
                        <Spring from={this.fromClose} to={this.props.filterState[this.props.filter] ? this.activeClose : this.fromClose}>
                            {styles => <div className="close-knob" style={styles}>+</div>}
                        </Spring>
                    </div>)}
            </Spring>
        )
    }
}
 
export default PartnerFilter;