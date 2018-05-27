import React, { Component } from 'react';
import Carousel from './Carousel'

class HomepageTop extends Component {
    render() {
        return ( 
            <div className="homepage-top">
                <div className="homepage-top-big-image" style={{backgroundImage: `url(${this.props.page[0].acf['header-image']})`}}>
                    <div className="triangles-container">
                        <img className="two-triangles" src={this.props.page[0].acf['carousel-inner-image']} alt="triangle-logo" />
                    </div>
                    <h1 className="leaderboard-text">{this.props.page[0].acf['h1']}</h1>
                    <div className="leaderboard-circle">
                        <img className="arrow-down" src={require('./ArrowDown.png')} alt="scroll down" />
                    </div>
                </div>
                <div className="home-second-level">
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