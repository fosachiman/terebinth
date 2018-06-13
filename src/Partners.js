import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopOnMount from './ScrollToTop';
import PartnerFilters from './PartnerFilters';
import PartnerContainer from './PartnerContainer';
import { Parallax } from 'react-parallax';

class Partners extends Component {
    constructor(props) {
        super(props);
        this.page = this.findPage('partners_page');
        this.partners = this.findPage('resource_list');

        this.filters = [...this.partners].reduce((accum, partner) => {
            const filter = partner.acf.filter;
            if (!accum.includes(filter)) accum.push(filter);
            return accum;
        }, [])

        this.state = this.filters.reduce((accum, filter) => (
            {filters: {...accum.filters, [filter]: false}}    
        ), {})
    }

    findPage = (pageTitle) => {
        const pages = this.props.pages.filter((page) => page.type === pageTitle)
        return pages
    }

    changeFilter = (filter) => {
        const copyState = {...this.state};
        this.setState({ filters: {...copyState.filters, [filter]: !copyState.filters[filter]}})
    }

    render() {
        return ( 
            <div className="partners">
                <ScrollToTopOnMount />
                <Header page={this.findPage('header')}/>
                <Parallax
                    bgImage={this.page[0].acf['leaderboard_image']}
                    bgImageAlt="header-image"
                    strength={100}
                >
                    <div className="partners-big-image">
                        <div className="big-image-color">
                            <div className="partners-big-image-text-container">
                                <h1 className="partners-header">{this.page[0].acf['title']}</h1>
                                <div className="customer-box-line"/>
                                <div className="partners-text" dangerouslySetInnerHTML={{__html: this.page[0].acf['sub_header_text']}}/>
                            </div>
                        </div>
                    </div>
                </Parallax>
                <div className="partners-filters">
                    <PartnerFilters filters={this.filters} filterState={this.state.filters} changeFilter={this.changeFilter}/>
                </div>
                <PartnerContainer partners={this.partners} filterState={this.state.filters}/>
                <Footer page={this.findPage('footer')}/>
            </div> 
        )
    }
}
 
export default Partners;