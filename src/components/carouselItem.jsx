import React from 'react';
import PropTypes from 'prop-types';
import './carouselItem.css';

const CarouselItem = ({src, title}) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={src} alt={title}  />
</div>
);

CarouselItem.propTypes = {
  image: PropTypes.string,
};


export default CarouselItem;