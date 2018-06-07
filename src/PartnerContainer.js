import React, { Component } from 'react';
import SinglePartner from './SinglePartner';
import { Transition } from 'react-spring';

class PartnerContainer extends Component {
    constructor(props) {
        super(props);

        this.partners = props.partners.map((partner) => (
            <SinglePartner partner={partner} key={partner.acf.name} />
        ))
        console.log(this.partners)
    }
    render() {
        const anyTrue = Object.keys(this.props.filterState).find((filter) => this.props.filterState[filter])
        const items = this.props.partners.filter((partner) => {
            return this.props.filterState[partner.acf.filter] || !anyTrue
        }) 
        console.log(items)
        return ( 
            <div className="partner-container">
                <Transition
                    keys={items.map(item => item.acf.name)}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}>
                    {items.map(item => styles => <SinglePartner style={styles} partner={item} />)}
                </Transition>
            </div> 
        )
    }
}
 
export default PartnerContainer;