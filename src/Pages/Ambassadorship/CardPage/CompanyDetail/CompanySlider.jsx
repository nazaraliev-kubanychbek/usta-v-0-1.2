import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img12 from "./img/Vector.png";
import "./companySlider.scss";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const CompanySlider = ({ list = [] }) => {
  const [slides, setSlides] = useState([]);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (list.length > 0) {
      setSlides(list);
    }
  }, [list]);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  const slideLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slideRight = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };
  return (
    <div className="container">
      <div className="btn-block">
        <button className="slider-button" onClick={slideLeft}>
          <img
            src={img12}
            alt="<"
            className="img-click-for-slider img-click-for-slider-left"
          />
        </button>
        <button className="slider-button" onClick={slideRight}>
          <img
            src={img12}
            alt=">"
            className="img-click-for-slider img-click-for-slider-right"
          />
        </button>
      </div>

      <div className="slider-container">
        <Swiper
          spaceBetween={20}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          breakpoints={{
            260: { slidesPerView: 1, spaceBetween: 10 },
            360: { slidesPerView: 1, spaceBetween: 15 },
            480: { slidesPerView: 1, spaceBetween: 20 },
            570: { slidesPerView: 1.4, spaceBetween: 20 },
            770: { slidesPerView: 2.3, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1220: { slidesPerView: 3.5, spaceBetween: 20 },
            1420: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <div className="slide-item">
                <a href={slide.image} data-fancybox="gallery"
                style={{
                    outline: 'none'
                }}
                >
                  <img src={slide.image} alt={""} />
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="dots-container">
        {Array(
          Math.ceil(slides.length / 4) < 3 ? 3 : Math.ceil(slides.length / 4)
        )
          .fill(0)
          .map((_, dotIndex) => (
            <div
              key={dotIndex}
              className={`dot ${
                currentIndex >= dotIndex * 4 &&
                currentIndex < (dotIndex + 1) * 4
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                swiperRef.current && swiperRef.current.slideToLoop(dotIndex * 2)
              }
            />
          ))}
      </div>
    </div>
  );
};

export default CompanySlider;
