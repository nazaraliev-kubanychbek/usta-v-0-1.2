import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Membership.scss';
import { useSelector } from 'react-redux';
import { URL_API } from '../../Futures/URLAPI';
import Slider from '../../Widgets/ui/Slider/Slider';

function Membership() {
  const [advantagesBanner, setAdvantagesBanner] = useState(null);
  const [advantageFor, setAdvantageFor] = useState(null);
  const [categories, setCategories] = useState(null);
  const [instructions, setInstructions] = useState(null);
  const lang = useSelector(s => s.reducer.lang);

  useEffect(() => {
    axios.get(`${URL_API}api/v1/advantage/advantagesbanner/`)
      .then((response) => setAdvantagesBanner(response.data[0]))
      .catch((error) => console.error('Error fetching advantages banner:', error));

    axios.get(`${URL_API}api/v1/advantage/advantagefor/`)
      .then((response) => setAdvantageFor(response.data))
      .catch((error) => console.error(`Error fetching advantages for:`, error));

    axios.get(`${URL_API}api/v1/advantage/category/`)
      .then((response) => setCategories(response.data))
      .catch((error) => console.error('Error fetching categories:', error));

    axios.get(`${URL_API}api/v1/advantage/instruction/`)
      .then((response) => setInstructions(response.data))
      .catch((error) => console.error('Error fetching instructions:', error));

  }, []);

  return (
    <div className='member-container'>
      <div className='page-banner'
        style={{
          backgroundImage: advantagesBanner ? `url(${advantagesBanner.image})` : 'none',
        }}
      >
        <div className="container">
          <div className="page-main-text-block">
            <h1 className='page-title'>
              {advantagesBanner ? <>
              {
                lang === 'ru'
                ? advantagesBanner.title
                : lang === 'en'
                ? advantagesBanner.title_en
                : advantagesBanner.title_ky
              }
              </>: 'Загрузка...'}
            </h1>

            <p className='page-description'>
              {advantagesBanner ?<>{
                 lang === 'ru'
                 ? advantagesBanner.description
                 : lang === 'en'
                 ? advantagesBanner.description_en
                 : advantagesBanner.description_ky
              }
              </> : 'Загрузка данных...'
              }
            </p>
          </div>
        </div>
      </div>

      <div className="container">
          <div className="page-main-text-block-mobile">
            <h1 className='page-title-mobile'>
              {advantagesBanner ? <>
              {
                lang === 'ru'
                ? advantagesBanner.title
                : lang === 'en'
                ? advantagesBanner.title_en
                : advantagesBanner.title_ky
              }
              </>: 'Загрузка...'}
            </h1>

            <p className='page-description-mobile'>
              {advantagesBanner ?<>{
                 lang === 'ru'
                 ? advantagesBanner.description
                 : lang === 'en'
                 ? advantagesBanner.description_en
                 : advantagesBanner.description_ky
              }
              </> : 'Загрузка данных...'
              }
            </p>
          </div>
        </div>

      <div className="container">

              <section className="section">

              {Array.isArray(advantageFor) && advantageFor.length > 0 ? (
          advantageFor.map((card, index) => (
            <div className="member-main-img" key={card.id}>
              {index % 2 === 0 ? (
                // If index is even (0, 2, 4...), image is on the left, text is on the right
                <div className='row'>
                  <div className="col-6">
                    <img src={card.image} alt="Card img" className='img1' />
                  </div>
                  <div className="col-6">
                    <h1 className="member-body-title">{
                      lang === 'ru'
                        ? card.title
                        : lang === 'en'
                          ? card.title_en
                          : card.title_ky
                    }</h1>
                    <p className="member-body-text">{
                      lang === 'ru'
                        ? card.description
                        : lang === 'en'
                          ? card.description_en
                          : card.description_ky
                    }</p>
                  </div></div>
              ) : (
                // If index is odd (1, 3, 5...), text is on the left, image is on the right

                <div className='row nurs'>

                  <div className="col-6 text">
                    <h1 className="member-body-title">{
                      lang === 'ru'
                        ? card.title
                        : lang === 'en'
                          ? card.title_en
                          : card.title_ky
                    }</h1>
                    <p className="member-body-text1">{
                      lang === 'ru'
                        ? card.description
                        : lang === 'en'
                          ? card.description_en
                          : card.description_ky}</p>
                  </div>
                  <div className="col-6 img">
                    <img src={card.image} alt="Card image" className='img2 ' />
                  </div>
                </div>

              )}
            </div>
          ))
        ) : (
          <p>Загрузка данных...</p>
        )}
              </section>


        <section className="section">
        <h1 className='ctegory-text'>{lang === "ru" ? "КАТЕГОРИИ" : lang === "en" ? "CATEGORIES" : "КАТЕГОРИЯЛАР"}</h1>
        <Slider url={'api/v1/advantage/category/'} detail={true} detailUrl='/membership/category' />

        </section>

          <section className="section">
          <h1 className='member-steps-title padding-top'>{lang === "ru" ? "ПОШАГОВАЯ ИНСТРУКЦИЯ" : lang === "en" ? "STEP-BY-STEP INSTRUCTIONS" : "КАДАМ-БА-КАДАМ НУСКАМАЛАР"}</h1>
        <div className='member-steps padding-bottom'>
          {Array.isArray(instructions) && instructions.length > 0 ? (
            instructions.map((step, index) => (
              <div key={index} className="block">
                <h1 className='member-block-category-title'>
                  {lang === 'ru'
                        ? step.title
                        : lang === 'en'
                          ? step.title_en
                          : step.title_ky} {step.number}
                </h1>
                <p className='member-block-category-text'>{lang === 'ru'
                        ? step.description
                        : lang === 'en'
                          ? step.description_en
                          : step.description_ky}</p>
              </div>
            ))
          ) : (
            'Загрузка инструкций...'
          )}
        </div>
          </section>


      </div>
    </div>
  );
}

export default Membership;
