import React, { Component } from 'react';
import TopBottomProvide from './TopBottomProvide';
import MiddleProvide from './MiddleProvide';
import * as Scroll from 'react-scroll';
import Waypoint from 'react-waypoint';

const Element = Scroll.Element;

class ProvideSection extends Component {
    constructor(props) {
        super(props);
        this.topPage = props.pages.filter((page) => page.acf['top-bottom'] === "top");
        this.bottomPage = props.pages.filter((page) => page.acf['top-bottom'] === "bottom")
        this.middlePages = props.pages.filter((page) => (page.acf['top-bottom'] !== "bottom" && page.acf['top-bottom'] !== "top"))
        this.sortedMiddlePages = this.middlePages.sort((a,b) => a.acf.order - b.acf.order);
    }
    render() {
        return ( 
            <section className="provide-section">
                <Waypoint key={'waypoint-2'} />
                <Element name="services"></Element>
                <TopBottomProvide page={this.topPage} changePosition={this.props.changePosition}/>
                {this.sortedMiddlePages.map((page, i) => <MiddleProvide key={i} page={page} left={i === 0 || i % 2 === 0 ? true : false} carousel={this.props.carousels[i]}/>)}
                <TopBottomProvide page={this.bottomPage} changePosition={this.props.changePosition}/>
            </section>
        )
    }
}
 
export default ProvideSection;