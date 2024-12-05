import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import img12 from './assets/Vector (2).png';
import './styles/slider.scss';
import { URL_API } from '../../../Futures/URLAPI';
import { Link } from 'react-router-dom';


const Slider = ({url = '', list = [], detail = false, detailUrl = '', member = false}) => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lang = useSelector((state) => state.reducer.lang);

  useEffect(() => {
    if(url.length > 0){
      axios.get(`${URL_API}${url}`)
      .then(response => {
        setSlides(response.data);
        setLoading(false);

      })
      .catch(() => {
        setError('Ошибка загрузки данных');
        setLoading(false);
      });
    } else {
      setSlides(list)
      setLoading(false)

    }
  }, [list, url]);

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

  // Функция для удаления HTML-тегов
  const stripHTML = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "";
  };
  const localizedDescription = (slider) => {

    switch (lang) {
      case 'ru':
        return stripHTML(slider.description_ru);
      case 'en':
        return stripHTML(slider.description_en);
      default:
        return stripHTML(slider.description_ky); // Резервное значение
    }
  };

  if (loading) return <p>Загрузка данных...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <div className="btn-block">
        <button className="slider-button" onClick={slideLeft}>
          <img src={img12} alt="<" className="img-click-for-slider img-click-for-slider-left" />
        </button>
        <button className="slider-button" onClick={slideRight}>
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
          {
           slides.map((slide) => {

            return <SwiperSlide key={slide.id}>
            {
              detail && detailUrl.length > 0
              ? <Link
              style={{
                textDecoration: 'none',
                color: '#000'
              }}
              to={`${detailUrl}/${slide.id}`}>
               <div className="slide-item">
              <img src={slide.image} alt={ list.length > 0
                ? ''
                : localizedDescription(slide)} />
              {/* Удаляем HTML-теги из описания */}
              {
                member
                ? <h4 dangerouslySetInnerHTML={{__html:
                  lang === 'ru'
                  ? slide.title
                  : lang === 'en'
                  ? slide.title_en
                  : slide.title_ky
                }}></h4>
                : ''
              }
              {
                slide.date
                ? <p className="slide-item-date">
                  {slide.date}
                </p>
                : ''
              }
              <p className="slide-item-p"
              dangerouslySetInnerHTML={{__html:
                lang === 'ru'
                ? slide.description
                : lang === 'en'
                ? slide.description_en
                : slide.description_ky
              }}
              ></p>
            </div>
              </Link>
              :  <div className="slide-item">
              <img src={slide.image} alt={ list.length > 0
                ? ''
                : localizedDescription(slide)} />
              {/* Удаляем HTML-теги из описания */}
              {
                slide.date
                ? <p className="slide-item-date">
                  {slide.date}
                </p>
                : ''
              }

              <p className="slide-item-p"
              dangerouslySetInnerHTML={{__html:
                lang === 'ru'
                ? slide.description
                : lang === 'en'
                ? slide.description_en
                : slide.description_ky
              }}
              ></p>
            </div>
            }

          </SwiperSlide>
           })}
        </Swiper>
      </div>

      <div className="dots-container">
        {Array(Math.ceil(slides.length / 4))
          .fill(0)
          .map((_, dotIndex) => (
            <div
              key={dotIndex}
              className={`dot ${currentIndex >= dotIndex * 4 && currentIndex < (dotIndex + 1) * 4 ? 'active' : ''}`}
              onClick={() => swiperRef.current && swiperRef.current.slideToLoop(dotIndex * 4)}
            />
          ))}
      </div>
    </div>
  );
};

export default Slider;
