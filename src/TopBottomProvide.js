import React, { Component } from 'react';

class TopBottomProvide extends Component {
    render() {
        return ( 
            <div className="top-bottom-provide">
                <div className="top-bottom-left">
                    <h3 className="top-bottom-title">{this.props.page[0].acf.title}</h3>
                    <div className="gradient-line-left" />
                </div>
                <div className="top-bottom-right">
                    <div className="gradient-line-right" />
                    <div className="top-bottom-text" dangerouslySetInnerHTML={{__html: this.props.page[0].acf.blurb}} />
                </div>            
            </div> 
        )
    }
}
 
export default TopBottomProvide;