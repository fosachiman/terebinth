import React, { Component } from 'react';
import TopBottomProvide from './TopBottomProvide';
import MiddleProvide from './MiddleProvide';

class ProvideSection extends Component {
    constructor(props) {
        super(props);
        this.topPage = props.pages.filter((page) => page.acf['top-bottom'] === "top");
        this.bottomPage = props.pages.filter((page) => page.acf['top-bottom'] === "bottom")
        this.middlePages = props.pages.filter((page) => (page.acf['top-bottom'] !== "bottom" && page.acf['top-bottom'] !== "top"))
    }
    render() {
        console.log(this.props.carousels)
        return ( 
            <section className="provide-section">
                <TopBottomProvide page={this.topPage} />
                {this.middlePages.map((page, i) => <MiddleProvide key={i} page={page} left={i === 0 || i % 2 === 0 ? true : false} carousel={this.props.carousels[i]}/>)}
                <TopBottomProvide page={this.bottomPage} />
            </section>
        )
    }
}
 
export default ProvideSection;