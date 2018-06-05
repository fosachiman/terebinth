import React, { Component } from 'react';
import TopBottomProvide from './TopBottomProvide';
import MiddleProvide from './MiddleProvide';
import * as Scroll from 'react-scroll';

const Element = Scroll.Element;


class ProvideSection extends Component {
    constructor(props) {
        super(props);
        this.topPage = props.pages.filter((page) => page.acf['top-bottom'] === "top");
        this.bottomPage = props.pages.filter((page) => page.acf['top-bottom'] === "bottom")
        this.middlePages = props.pages.filter((page) => (page.acf['top-bottom'] !== "bottom" && page.acf['top-bottom'] !== "top"))
    }
    render() {
        return ( 
            <section className="provide-section">
                <Element name="services"></Element>
                <TopBottomProvide page={this.topPage} />
                {this.middlePages.map((page, i) => <MiddleProvide key={i} page={page} left={i === 0 || i % 2 === 0 ? true : false} carousel={this.props.carousels[i]}/>)}
                <TopBottomProvide page={this.bottomPage} />
            </section>
        )
    }
}
 
export default ProvideSection;