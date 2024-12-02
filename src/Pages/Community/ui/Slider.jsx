import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import img12 from '../assets/Vector (2).jpg';
import './styles/slider.scss';
import { URL_API } from '../../../Futures/URLAPI';
import "swiper/css";

const stripHTML = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, 'text/html');
  return doc.body.textContent || "";
};
const localizedDescription = (slider, lang) => {
  const descriptions = {
    ru: slider.description_ru, en: slider.description_en, ky: slider.description_ky,
  };
  return stripHTML(descriptions[lang] || descriptions.ky);
};
const Slider = () => {
  const lang = useSelector((state) => state.reducer.lang);
  const [slides, setSlides] = useState([]);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${URL_API}api/v1/community/image-info/`)
      .then((response) => setSlides(response.data))
      .catch(() => setSlides([]));
  }, []);

  const handleSlideChange = (swiper) => setCurrentIndex(swiper.realIndex);
  return (
    <div className="container">
      <div className="btn-block">
        <button className="slider-button" onClick={() => swiperRef.current?.slidePrev()}>
          <img src={img12} alt="<" className="img-click-for-slider img-click-for-slider-left" />
        </button>
        <button className="slider-button" onClick={() => swiperRef.current?.slideNext()}>
          <img src={img12} alt=">" className="img-click-for-slider img-click-for-slider-right" />
        </button>
      </div>
      <div className="slider-container">
        <Swiper
          spaceBetween={20}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          breakpoints={{
            260: { slidesPerView: 1, spaceBetween: 40 },
            360: { slidesPerView: 1, spaceBetween: 20 },
            480: { slidesPerView: 1.4, spaceBetween: 20 },
            570: { slidesPerView: 1.6, spaceBetween: 20 },
            770: { slidesPerView: 2.3, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1220: { slidesPerView: 3.5, spaceBetween: 20 },
            1420: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slide-item">
                <img src={slide.image} alt={localizedDescription(slide, lang)} />
                <p className="slide-item-p">{localizedDescription(slide, lang)}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="dots-container">
        {Array.from({ length: Math.ceil(slides.length / 4) }).map((_, dotIndex) => (
          <div
            key={dotIndex}
            className={`dot ${currentIndex >= dotIndex * 4 && currentIndex < (dotIndex + 1) * 4 ? 'active' : ''}`}
            onClick={() => swiperRef.current?.slideToLoop(dotIndex * 4)}
          />
        ))}
      </div>
    </div>
  );
};
export default Slider;
