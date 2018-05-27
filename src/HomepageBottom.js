import React, { Component } from 'react';

class HomepageBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.page)
        return ( 
            <div className="homepage-bottom">
                <div className="homepage-top-big-image" style={{backgroundImage: `url(${this.props.page[0].acf['large-bottom-image']})`}}>
                    <div className="bottom-image-text-container">
                        <div className="bottom-quote" dangerouslySetInnerHTML={{__html: this.props.page[0].acf['bottom_quote']}} />
                    </div>
                </div>
                <div className="bottom-blue-background">
                    <div className="customer-box-line" />
                    <div className="bottom-partners-cta" dangerouslySetInnerHTML={{__html: this.props.page[0].acf['bottom_explainer']}} />
                    <button className="customer-box-button">View Full List</button>
                </div>
            </div>
        )
    }
}
 
export default HomepageBottom;