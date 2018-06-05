import React, { Component } from 'react';
import Nuka from "nuka-carousel";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft.js";


class HalfWidthCarousel extends Component {

  constructor(props) {
    super(props);
    this.Decorators = [
        {
          component: ArrowRight,
          position: "CenterRight",

        },
        {
          component: ArrowLeft,
          position: "CenterLeft",

        }
      ];

    this.initial = props.images[0].acf;
    this.page = Object.keys(props.images[0].acf).filter((thing) => thing.match(/image\d$/));
    this.images = this.page.filter((_, i) => this.initial[`image${i + 1}`])
    this.components = this.images.map((image) => (
        <div key={image} className="carousel-image">
            <div className="carousel-image" style={{backgroundImage: `url(${this.initial[image]})`}} />
            <div className="carousel-text-container">
              {this.initial[`${image}-header`] && <h3 className="carousel-header">{this.initial[`${image}-header`]}</h3>}
              {this.initial[`${image}-text`] && <p className="carousel-text">{this.initial[`${image}-text`]}</p>}
            </div>
        </div>
    ))
  }
  render() {
    return (
        <Nuka
            easing={"easeInOutSine"}
            decorators={this.components.length <= 1 ? null : this.Decorators}
            wrapAround={this.components.length <= 1 ? false : true}
            dragging={this.components.length <= 1 ? false : true}
        >
          {this.components}
        </Nuka>
    );
  }
}

export default HalfWidthCarousel;