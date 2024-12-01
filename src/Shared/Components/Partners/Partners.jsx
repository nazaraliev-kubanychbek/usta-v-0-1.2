import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import 'swiper/css';
import './styles/partners.scss';
import { URL_API } from '../../../Futures/URLAPI';


const Partners = () => {
    const [partners, setPartners] = useState([]);
    const [partnersTitle, setPartnersTitle] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const lang = useSelector((x) => x.reducer.lang);

    useEffect(() => {
        // Получение данных партнеров
        axios
            .get(`${URL_API}api/v1/community/partners/`)
            .then((response) => {
                setPartners(response.data);
            })
            .catch(() => {
                setError('Ошибка загрузки данных партнеров');
            });

        // Получение заголовка
        axios
            .get(`${URL_API}api/v1/community/titel/`)
            .then((response) => {
                setPartnersTitle(response.data[0]); // Заголовок - второй объект в массиве
            })
            .catch(() => {
                setError('Ошибка загрузки данных заголовка');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Загрузка данных...</p>;
    if (error) return <p>Ошибка: {error}</p>;

    // Выбор заголовка в зависимости от языка
    const getLocalizedTitle = () => {
        switch (lang) {
            case 'ru':
                return partnersTitle.title_partners_ru || "Партнеры сообщества";
            case 'en':
                return partnersTitle.title_partners_en || "Community Partners";
            default:
                return partnersTitle.title_partners_ky || "Жамаат шериктери";
        }
    };

    return (
        <div className='container'>
            <div className="partners">
                {/* Динамический заголовок с использованием dangerouslySetInnerHTML */}
                <h1
                    className='container-partners-h1'
                    dangerouslySetInnerHTML={{ __html: getLocalizedTitle() }}
                />

                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        1420: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        1220: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5.5,
                            spaceBetween: 20,
                        },
                        993: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        770: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        568: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 2.8,
                            spaceBetween: 20,
                        },
                        360: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        260: {
                            slidesPerView: 1.2,
                            spaceBetween: 0,
                        }
                    }}
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <div className="card-content">
                                <img
                                    className='card-content-img'
                                    src={partner.image}
                                    alt={partner.name}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Partners;
