import React, { Component } from 'react';
import Carousel from './Carousel'
import * as Scroll from 'react-scroll';
import { Parallax } from 'react-parallax';
import Waypoint from 'react-waypoint';

const Element = Scroll.Element;
class HomepageTop extends Component {

    handleEnter = () => {
        this.props.changePosition('About')
    }

    render() {
        return ( 
            <div className="homepage-top">
                <Parallax
                    blur={2}
                    bgImage={this.props.page[0].acf['header-image']}
                    bgImageAlt="header-image"
                    strength={400}
                >
                    <div className="homepage-top-big-image">
                        <div className="triangles-container">
                            <img className="two-triangles" src={this.props.page[0].acf['carousel-inner-image']} alt="triangle-logo" />
                        </div>
                        <h1 className="leaderboard-text">{this.props.page[0].acf['h1']}</h1>
                    </div>
                </Parallax>
                <Waypoint key={'waypoint-1'} onEnter={this.handleEnter}/>
                <Element name="about"></Element>
                <div className="home-second-level">
                    <div className="leaderboard-circle">
                        <img className="arrow-down" src={require('./ArrowDown.png')} alt="scroll down" />
                    </div>
                    <img className="second-level-logo" src={this.props.page[0].acf['logo-image']} alt="terebinth logo" />
                    <div className="second-level-text" dangerouslySetInnerHTML={{__html: this.props.page[0].acf['sub-header']}}/>
                </div>
                <div className="home-third-level">
                    <div className="home-third-level-flex">
                        <div className="third-level-carousel-container">
                            <Carousel images={this.props.images}/>
                        </div>
                        <div className="third-level-text-container">
                            <h3 className="third-level-header">{this.props.page[0].acf['leadership-header']}</h3>
                            <div className="third-level-text" dangerouslySetInnerHTML={{__html: this.props.page[0].acf['leadership-text']}} />
                        </div>
                    </div>
                </div>
            </div>
         )
    }
}
 
export default HomepageTop;