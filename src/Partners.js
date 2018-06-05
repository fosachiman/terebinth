import React, { Component } from 'react';

class Partners extends Component {
    constructor(props) {
        super(props);
        this.page = this.findPage('partners_page');
        this.partners = this.findPage('resource_list');
    }

    state = {}

    findPage = (pageTitle) => {
        const pages = this.props.pages.filter((page) => page.type === pageTitle)
        return pages
    }

    render() {
        return ( 
            <div className="partners">
                <div className="partners-big-image" style={{backgroundImage: `url(${this.page[0].acf['leaderboard_image']})`}}>
                    <div className="big-image-color">
                        <h1 className="partners-header">{this.page[0].acf['title']}</h1>
                        <div className="customer-box-line"/>
                        <div className="partners-text" dangerouslySetInnerHTML={{__html: this.page[0].acf['sub_header_text']}}/>
                    </div>
                </div>
                <div className="partners-filters">
                
                </div>
            </div> 
        )
    }
}
 
export default Partners;