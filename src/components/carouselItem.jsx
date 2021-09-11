import React from 'react';
import './carouselItem.css';

const CarouselItem = ({_id, src, title}) => (
  <div key={_id} className="item">
    <img className="item__img" src={src} alt={title}  />
  </div>
);

export default CarouselItem;