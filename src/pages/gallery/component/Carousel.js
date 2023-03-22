import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import "./photoswiper.css";

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  useEffect(() => {
    setGoToSlide(2);
  }, []);

  return (
    <>
    <div className="carouselContainer">
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
    <div className="photo-nav-btn-div">
        <div
          className="photo-nav-btn"
          onClick={()=>setGoToSlide(goToSlide-1)}
        >
          &lt;-
        </div>
        <div
          className="photo-nav-btn"
          onClick={()=>setGoToSlide(goToSlide+1)}
        >
          -&gt;
        </div>
      </div>
    </>

  );
}
