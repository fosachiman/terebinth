import React, { Component } from 'react';
import { Spring } from 'react-spring';

class PartnerFilter extends Component {
    constructor(props) {
        super(props);

        this.fromButton = {
            borderColor: 'rgb(15, 117, 188)',
            color: 'rgb(15, 117, 188)',
            background: 'rgba(255,255,255,0)',
            transform: 'rotate(0deg)',
            fill: 'rgb(15, 117, 188)',
            stroke: 'rgb(255, 255, 255)'
        }
        this.activeButton = {
            borderColor: 'rgb(15, 117, 188)',
            color: 'rgb(255, 255, 255)',
            background: 'rgba(15, 117, 188, 1)',
            transform: 'rotate(45deg)',
            fill: 'rgb(255, 255, 255)',
            stroke: 'rgb(15, 117, 188)'
        }
    }
    handleClick = () => {
        this.props.changeFilter(this.props.filter)
    }

    render() { 
        return (
            <Spring from={this.fromButton} to={this.props.filterState[this.props.filter] ? this.activeButton : this.fromButton}> 
                {styles => (
                    <div className={`partner-filter ${this.props.showFilters ? 'mob' : ''}`} style={{borderColor: styles.borderColor, color: styles.color, background: styles.background}} onClick={this.handleClick}>
                        <div className="partner-filter-text">{this.props.filter}</div>
                        <svg style={{transform: styles.transform}} className="close-knob" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49"><circle cx="24.5" cy="24.5" r="24.5" style={{fill: styles.fill}}/><path d="M26.55,12.11V23.5h11v2.9H26.55V37.89h-3.1V26.4H12.5V23.5h11V12.11Z" transform="translate(-0.5 -0.5)" style={{stroke: styles.stroke, fill: styles.stroke}} strokeMiterlimit={10} strokeWidth="3px"/></svg>
                    </div>)}
            </Spring>
        )
    }
}
 
export default PartnerFilter;