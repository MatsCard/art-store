import React from 'react';

const CarouselItem = ({_id, src, title}) => (
  <div key={_id} className="gallery-item">
    <img className="gallery-img" src={src} alt={title}  />
  </div>
);

export default CarouselItem;