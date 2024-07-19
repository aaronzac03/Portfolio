import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ProjectCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-carousel">
      <div className="carousel-wrapper">
        <button className="carousel-control left" onClick={prevSlide}>
          <MdChevronLeft />
        </button>
        <Carousel
          showThumbs={false}
          showArrows={false}
          selectedItem={currentSlide}
          autoPlay={false}  // Changed to false to disable automatic sliding
          infiniteLoop={true}
          interval={5000}
          stopOnHover={true}
        >
          {images.map((image, idx) => (
            <div key={idx}>
              <img src={image} alt={`Screenshot ${idx + 1}`} />
            </div>
          ))}
        </Carousel>
        <button className="carousel-control right" onClick={nextSlide}>
          <MdChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
