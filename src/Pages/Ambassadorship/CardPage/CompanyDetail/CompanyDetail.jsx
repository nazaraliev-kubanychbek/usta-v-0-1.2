import "./CompanyDetail.scss";
import CategoryBlock from "../../CategoryBlock/CategoryBlock";
import { URL_API } from "../../../../Futures/URLAPI";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CompanySlider from "./CompanySlider";
import AmbassadorList from "../../AmbassadorList/AmbassadorList";
import { setSelectedCategory } from "../../../../Futures/reducers/reducer";
import { useParams } from "react-router-dom";
import Requisites from "../../Requisites/Requisites";
import phoneIcon from './img/phone-icon.svg';

const CompanyDetail = () => {
  const [data, setData] = useState({});
  const lang = useSelector((s) => s.reducer.lang);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    axios(`${URL_API}api/v1/ambassadorship/ambassadors/${params.id}/`).then(
      ({ data }) => {
        setData(data);
        dispatch(setSelectedCategory(data.category));
      }
    );
  }, [params]);
  return (
    <div className="company-detail" style={{ minHeight: "100vh" }}>
      {JSON.stringify(data) === "{}" ? (
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {lang === "ru" ? (
            <p>Загрузка...</p>
          ) : lang === "en" ? (
            <p>Loading...</p>
          ) : (
            <p>Жүктөө...</p>
          )}
        </div>
      ) : (
        <>
          {/* Баннер начало */}
          <div
            className="company-detail-banner"
            style={{ backgroundImage: `url(${data.banner_image})` }}
          >
            <div className="container">
              <div className="company-detail-banner-text-block">
                <h1
                  className="company-detail-title"
                  dangerouslySetInnerHTML={{
                    __html:
                      lang === "ru"
                        ? data.title
                        : lang === "en"
                        ? data.title_en
                        : data.title_ky,
                  }}
                ></h1>
                <p
                  className="company-detail-text"
                  dangerouslySetInnerHTML={{
                    __html:
                      lang === "ru"
                        ? data.banner_description
                        : lang === "en"
                        ? data.banner_description_en
                        : data.banner_description_ky,
                  }}
                ></p>
              </div>
            </div>
          </div>
          {/* Баннер конец */}
          <section className="section">
          <div className="container">
                  <CategoryBlock />
                  </div>
          </section>

          {/* Блок с описанием начало */}

          <section className="section">
          <div className="container">
            <div
              className="company-detail-description-block"
              dangerouslySetInnerHTML={{
                __html:
                  lang === "ru"
                    ? data.description
                    : lang === "en"
                    ? data.description_en
                    : data.description_ky,
              }}
            ></div>
          </div>
          </section>


          {/* блок с описанием конец */}

          {/* Контакты начало */}
          <div className="container">
            <div className="company-detail-contact">
              {data.name_site && data.link_site ? (
                <a href={data.link_site} target="_blank"
                style={{
                    color: '#000'
                }}
                className="company-detail-contact-item">
                  <img
                    src={data.logo_site_image}
                    alt=""
                    className="company-detail-contact-item-icon"
                  />
                  <p className="company-detail-contact-item-text">{data.name_site}</p>
                </a>
              ) : (
                ""
              )}

              <a href={`tel: ${data.phone}`}
               style={{
                color: '#000',
                textDecoration: 'none',
            }}
              className="company-detail-contact-item">
                <img
                    src={phoneIcon}
                    alt=""
                    className="company-detail-contact-item-icon"
                  />
                <p className="company-detail-contact-item-text">{data.phone}</p>
              </a>

            </div>
          </div>
          {/* Контакты конец */}

            {/* Коммерческое предложение начало */}
            {
                data.pdf_file
                ? <div className="company-detail-download">
                <a href={data.pdf_file} className="company-detail-download-btn">
                    {
                        lang === 'ru'
                        ? 'скачать коммерческое предложение'
                        : lang === 'en'
                        ? 'download commercial offer'
                        : 'коммерциялык сунушту жүктөп алыңыз'
                    }
                </a>
                </div>
                : ''
            }

            {/* Коммерческое предложение конец */}

          {/* Слайды начало */}

            <section className="section">
            <CompanySlider list={data.ambassador_images} />
            </section>

          {/* Слайды конец */}

          {/* Реквизиты начало */}
          <section className="section">
          <Requisites data={data} />
          </section>


          {/* Реквизиты конец */}
          <section className="section">
          <div className="container">

<AmbassadorList id={data.id} />
</div>
          </section>

        </>
      )}
    </div>
  );
};

export default CompanyDetail;
