import React, { Component } from 'react';
import PartnerFilter from './PartnerFilter';

class PartnerFilters extends Component {
    render() {
        const filters = this.props.filters.map((filter) => (
            <PartnerFilter key={filter} filter={filter} filterState={this.props.filterState} changeFilter={this.props.changeFilter}/>
        )) 
        return ( <div className="partner-filter-container">{filters}</div> )
    }
}
 
export default PartnerFilters;