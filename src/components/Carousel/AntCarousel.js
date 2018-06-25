import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import style from './AntCarousel.less'

const AntCarousel = (props) => {
  return (
    <WingBlank>
      <Carousel className="my-carousel"
        dots={false}
        dragging={false}
        swiping={false}
        // autoplay
        // infinite
        // speed={200}
        autoplayInterval={300}
        resetAutoplay={false}
      >
        {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
          <div className="v-item" key={type}>{type}</div>
        ))}
      </Carousel>
    </WingBlank>
  )
}

export default AntCarousel;
