
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Events.scss';
import './Adaptation/Adaptation.scss';
import { useSelector } from 'react-redux';
import { URL_API } from '../../Futures/URLAPI';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [bannerEvents, setBannerEvents] = useState([]);
  const [keyEvents, setKeyEvents] = useState([]);
  const [videoEvents, setVideoEvents] = useState([]);
  const [photoEvents, setPhotoEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [eventText, setEventText] = useState({});
  const [keyEventsTitle, setKeyEventsTitle] = useState('');
  const lang = useSelector((state) => state.reducer.lang);

  const apiUrls = {
    Events: `${URL_API}api/v1/events/Events/`,
    PhotoEvents: `${URL_API}api/v1/events/PhotoEvents/`,
    BannerEvents: `${URL_API}api/v1/events/BannerEvents/`,
    KeyEventsTitle: `${URL_API}api/v1/events/KeyEventsTitle/`,
    KeyEvents: `${URL_API}api/v1/events/KeyEvents/`,
    VideoEvents: `${URL_API}api/v1/events/VideoEvents/`,
  };

  // Функция для загрузки данных
  const fetchEventsData = async () => {
    try {
      setIsLoading(true);

      const [
        eventsResponse,
        bannerEventsResponse,
        keyEventsTitleResponse,
        keyEventsResponse,
        videoEventsResponse,
        photoEventsResponse,
      ] = await Promise.all([
        axios.get(apiUrls.Events),
        axios.get(apiUrls.BannerEvents),
        axios.get(apiUrls.KeyEventsTitle),
        axios.get(apiUrls.KeyEvents),
        axios.get(apiUrls.VideoEvents),
        axios.get(apiUrls.PhotoEvents),
      ]);

      setEvents(eventsResponse.data);
      setBannerEvents(bannerEventsResponse.data);
      setKeyEventsTitle(keyEventsTitleResponse.data[0]);
      setKeyEvents(keyEventsResponse.data);
      setVideoEvents(videoEventsResponse.data);
      setPhotoEvents(photoEventsResponse.data.slice(0, 4));

      // Убедимся, что eventText становится объектом
      setEventText(eventsResponse.data[0] || {});
    } catch (err) {
      setError(`Ошибка загрузки данных: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEventsData();
  }, []);

  return (
    <div className="events">
      <div className="page-banner"
      style={
        bannerEvents.length > 0
        ? {
          backgroundImage: `url(${bannerEvents[0].banner})`,
        }
        : {}
      }
      >
        <div className="container">
          {
             bannerEvents.length > 0
             ?   <div className="page-main-text-block">
                  <h1 className="page-title" dangerouslySetInnerHTML={{__html:
                    lang === 'ru'
                    ?  bannerEvents[0].title
                    : lang === 'en'
                    ? bannerEvents[0].title_en
                    : bannerEvents[0].title_ky
                  }}></h1>
                  <p className="page-description" dangerouslySetInnerHTML={{__html:
                    lang === 'ru'
                    ?  bannerEvents[0].description
                    : lang === 'en'
                    ? bannerEvents[0].description_en
                    : bannerEvents[0].description_ky
                  }}></p>
             </div>
             : ''
          }

        </div>

      </div>

      {/* Блок с текстом события */}
      <section className="section">
      <div className="events-text-1">
        {isLoading ? (
          <div className="loader">Загрузка...</div>
        ) : error ? (
          <div className="error-message">Ошибка: {error}</div>
        ) : (
          <>
            <h1
              dangerouslySetInnerHTML={{
                __html:
                  eventText &&
                  (lang === 'ru'
                    ? eventText.name
                    : lang === 'en'
                    ? eventText.name_en
                    : eventText.name_ky),
              }}
            ></h1>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  eventText &&
                  (lang === 'ru'
                    ? eventText.description
                    : lang === 'en'
                    ? eventText.description_en
                    : eventText.description_ky),
              }}
            ></p>
          </>
        )}
      </div>
      </section>


      <div className="container">
        <div className="events-container">

          <section className="section">
          <div className="photo-events">
            <div className="photo-events-container">
              {photoEvents.length > 0 && !error ? (
                photoEvents.map((event, index) => (
                  <div key={index} className="photo-event-item">
                    <img src={event.banner} alt={event.name} />
                    <h1
                      dangerouslySetInnerHTML={{
                        __html:
                          lang === 'ru'
                            ? event.title
                            : lang === 'en'
                            ? event.title_en
                            : event.title_ky,
                      }}
                    ></h1>
                  </div>
                ))
              ) : (
                <p>Фото событий пока нет.</p>
              )}
            </div>
          </div>
          </section>

              <section className="section">
              <div className="key-annual-events">
            <div className='key-annual-title'>
              {isLoading ? (
                <div className="loader">Загрузка...</div>
              ) : error ? (
                <div className="error-message">Ошибка: {error}</div>
              ) : (
                <h1
                  dangerouslySetInnerHTML={{
                    __html:
                      lang === 'ru'
                        ? keyEventsTitle.title
                        : lang === 'en'
                        ? keyEventsTitle.title_en
                        : keyEventsTitle.title_ky,
                  }}
                ></h1>
              )}
            </div>
            <ul className="images-1">
              {keyEvents.length > 0 && !error ? (
                keyEvents.map((event, index) => (
                  <li key={index}>
                    <img src={event.banner} alt={event.name} />
                    <h1
                      dangerouslySetInnerHTML={{
                        __html:
                          lang === 'ru'
                            ? event.description
                            : lang === 'en'
                            ? event.description_en
                            : event.description_ky,
                      }}
                    ></h1>
                  </li>
                ))
              ) : (
                <p>Данных о ключевых мероприятиях пока нет.</p>
              )}
            </ul>
          </div>
              </section>

              <section className="section">

              <div >
            {isLoading && <div className="loader">Загрузка...</div>}
            {error && <div className="error-message">Ошибка: {error}</div>}
            {videoEvents.length > 0 && !error ? (
              videoEvents.map((video, index) => (
                <div
                  className={`video-content-container-${index % 2 === 0 ? '1' : '2'}`}
                  key={video.id}
                >
                  <div className="col-6">
                    <a href={video.video_url} target="_blank" rel="noopener noreferrer">
                      <img src={video.banner} alt={video.name} />
                    </a>
                  </div>
                  <div className="col-6">
                    <h1
                      dangerouslySetInnerHTML={{
                        __html:
                          lang === 'ru'
                            ? video.title
                            : lang === 'en'
                            ? video.title_en
                            : video.title_ky,
                      }}
                    ></h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          lang === 'ru'
                            ? video.description
                            : lang === 'en'
                            ? video.description_en
                            : video.description_ky,
                      }}
                    ></p>
                  </div>
                </div>
              ))
            ) : (
              <p>Данных о видео событиях пока нет.</p>
            )}
          </div>
              </section>

        </div>
      </div>
    </div>
  );
};

export default Events;
