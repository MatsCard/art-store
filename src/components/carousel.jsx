import React, { useEffect } from 'react'
import './carousel.scss'

const Carousel = ({_id, src, title, children}) => {


  useEffect(()=> {
    
    slider = document.querySelector('.gallery-items');
  }

  ,[])
  let slider = 0
  let isDown = false;
  let startX;
  let scrollLeft;
  
  const mousedown = (e) => {
    isDown = true;
    slider?.classList?.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }

  const mouseleave = () => {
    isDown = false;
    slider?.classList?.remove('active');
  }

  const mouseup = () => {
    isDown = false;
    slider?.classList?.remove('active');
  }

  const mousemove = (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
  <section className="grid-item gallery">
    <div 
        onMouseDown={mousedown}
        onMouseLeave={mouseleave}
        onMouseUp={mouseup}
        onMouseMove={mousemove}
        className="gallery-items">
          {children}
    </div>
  </section>
);
}
export default Carousel;


