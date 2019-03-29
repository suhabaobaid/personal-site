import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

import AboutImages from '../../data/about';

function generateCarourselItems() {
  return AboutImages.map(image => (
    <Carousel.Item
      bsPrefix="carousel-item-custom"
    >
      <img
        className="d-block"
        src={image.src}
        alt={image.alt}
      />
    </Carousel.Item>
  ));
}

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        {generateCarourselItems()}
      </Carousel>
    );
  }
}

export default ControlledCarousel;
