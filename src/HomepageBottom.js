import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HomepageBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
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
                    <Link to="/partners">    
                        <button className="customer-box-button">View Full List</button>
                    </Link>
                </div>
            </div>
        )
    }
}
 
export default HomepageBottom;