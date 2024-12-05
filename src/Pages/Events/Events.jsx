
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Events.scss';
import './Adaptation/Adaptation.scss';
import { useSelector } from 'react-redux';
import { URL_API } from '../../Futures/URLAPI';
import Slider from './../../Widgets/ui/Slider/Slider';
import ReactPlayer from 'react-player';

const Events = () => {

  const lang = useSelector((state) => state.reducer.lang);
  const [bannerData, setBannerData] = useState({});
  const [textData, setTextData] = useState({});
  const [eventList, setEventList] = useState([]);
  const [eventList2, setEventList2] = useState([]);
  const [eventList2Title, setEventList2Title] = useState([]);
  const [videoList, setVideoList] = useState([]);




  useEffect(() => {

      axios(`${URL_API}api/v1/events/BannerEvents/`)
      .then(({data})=> setBannerData(data[0]));

      axios(`${URL_API}api/v1/events/Events/`)
      .then(({data})=> setTextData(data[0]))

      axios(`${URL_API}api/v1/events/PhotoEvents/`)
      .then(({data})=>{
         setEventList(data)
        });
      axios(`${URL_API}api/v1/events/KeyEventsTitle/`)
      .then(({data})=> setEventList2Title(data[0]))

      axios(`${URL_API}api/v1/events/KeyEvents/`)
      .then(({data})=> setEventList2(data))

      axios(`${URL_API}api/v1/events/VideoEvents/`)
      .then(({data})=> setVideoList(data))

  }, []);

  return (
    <div className="events">
      <div className="page-banner"
      style={
        JSON.stringify(bannerData) !== '{}'
        ? {
          backgroundImage: `url(${bannerData.banner})`,
        }
        : {}
      }
      >
        <div className="container">
          {
             JSON.stringify(bannerData) !== '{}'
             ?   <div className="page-main-text-block">
                  <h1 className="page-title" dangerouslySetInnerHTML={{__html:
                    lang === 'ru'
                    ?  bannerData.title
                    : lang === 'en'
                    ? bannerData.title_en
                    : bannerData.title_ky
                  }}></h1>
                  <p className="page-description" dangerouslySetInnerHTML={{__html:
                    lang === 'ru'
                    ?  bannerData.description
                    : lang === 'en'
                    ? bannerData.description_en
                    : bannerData.description_ky
                  }}></p>
             </div>
             : ''
          }

        </div>

      </div>

          <section className='section'>
          <div className="container">
              <h2 className="section-title"
              dangerouslySetInnerHTML={{__html:
                lang === 'ru'
                ?  textData.name
                : lang === 'en'
                ? textData.name_en
                : textData.name_ky
              }}
              ></h2>
              <br />
              <p className="events-description"
              dangerouslySetInnerHTML={{__html:
                lang === 'ru'
                ?  textData.description
                : lang === 'en'
                ? textData.description_en
                : textData.description_ky
              }}
              ></p>
            </div>
              <Slider
              detail={true}
              detailUrl={'/events/event'}
              url={''} list={eventList.map((item)=>{
                return {
                  ...item,
                  description: item.title,
                  description_ru: item.title_ru,
                  description_en: item.title_en,
                  description_ky: item.title_ky,
                }
              })} />
          </section>

          <section className="section">
            <div className="container">
              <h2 className='section-title'
              dangerouslySetInnerHTML={{__html:
                lang === 'ru'
                ? eventList2Title.title
                : lang === 'en'
                ? eventList2Title.title_en
                : eventList2Title.title_ky
              }}
              ></h2>
            </div>

            <Slider detail={true} detailUrl='/events/significant_event' list={eventList2.map((item)=>{
                return {
                  ...item,
                  image: item.banner,
                }
              })} />
          </section>

          <section className="section">
            <div className="container">
                {
                  videoList.map((item,idx) =>{
                    return <div className={
                        idx % 2 === 0
                        ? "row row-gap-60"
                        : "row row-gap-60 events-row-reverse"
                    }>
                      <div className="col-6">
                        <ReactPlayer url={item.video_url} className='events-video' />
                      </div>
                      <div className="col-6">
                          <h3 className="events-video-title" dangerouslySetInnerHTML={{__html:
                            lang === 'ru'
                            ? item.title
                            : lang === 'en'
                            ? item.title_en
                            : item.title_ky
                          }}></h3>

                          <p className='events-video-text' dangerouslySetInnerHTML={{__html:
                            lang === 'ru'
                            ? item.description
                            : lang === 'en'
                            ? item.description_en
                            : item.description_ky
                          }}></p>
                      </div>
                    </div>
                  })
                }
            </div>
          </section>


    </div>
  );
};

export default Events;
