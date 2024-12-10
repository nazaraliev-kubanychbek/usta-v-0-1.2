import "./PartnerSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL_API } from "../../../Futures/URLAPI";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PartnerSlider = () => {
  const [data, setData] = useState([]);
  const lang = useSelector(s => s.reducer.lang);

  useEffect(() => {
    axios(`${URL_API}api/v1/community/partners/`).then(({ data }) =>
      setData(data)
    );
  }, []);
  return (
    <div className="container">
        <h2 className="section-title">
            {lang === "ru"
              ? "Партнеры"
              : lang === "en"
              ? "Partners"
              : "Партнерлор"}
          </h2>
          <br />
      <Swiper
        slidesPerView={5}
        loop={true}
        breakpoints={{
            260: { slidesPerView: 2,},
            360: { slidesPerView: 2, },
            480: { slidesPerView: 2, },
            576: { slidesPerView: 4, },
            768: { slidesPerView: 4, spaceBetween: 10 },
            992: { slidesPerView: 5},
            1200: { slidesPerView: 5, },
            1400: { slidesPerView: 5,  },
          }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Link to={`/community/partner/${item.id}`}>
              <div className="partner-slide-item-wrapper">
                <div className="partner-slide-item">
                  <img src={item.image} alt="" />
                </div>
              </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PartnerSlider;
