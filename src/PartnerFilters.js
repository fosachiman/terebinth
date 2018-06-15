import React, { Component } from 'react';
import PartnerFilter from './PartnerFilter';

class PartnerFilters extends Component {
    
    state = {
        showFilters: false
    }
    
    showFilters = () => {
        this.setState({ showFilters: true })
    }

    hideFilters = () => {
        this.setState({ showFilters: false })
    }
    
    render() {
        const filters = this.props.filters.map((filter) => (
            <PartnerFilter key={filter} filter={filter} showFilters={this.state.showFilters} filterState={this.props.filterState} changeFilter={this.props.changeFilter}/>
        )) 
        return ( 
            <div className={`partner-filter-container ${this.state.showFilters ? 'open' : ''}`}>
                {!this.state.showFilters && <div className="mobile-partner-filter-button" onClick={() => this.showFilters()}>Show Filters</div>}
                {filters}
                {this.state.showFilters && <div className="mobile-hide-filters" onClick={() => this.hideFilters()}>Hide Filters</div>}
            </div>
        )
    }
}
 
export default PartnerFilters;