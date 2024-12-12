import "./Services.scss";
import "../Home/Home.scss";
import "../../Widgets/ui/scss/styles.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { URL_API } from "../../Futures/URLAPI";
import { Link } from "react-router-dom";
import Slider from './../../Widgets/ui/Slider/Slider';

function Services() {
  const lang = useSelector((state) => state.reducer.lang);
  const [servicesList, setServicesList] = useState([]);
  const [servicesProgramList, setServicesProgramList] = useState([]);

  const [data, setData] = useState({
    services: [],
    article: [],
    title: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesResponse, articleResponse, titleResponse] =
          await Promise.all([
            axios.get(`${URL_API}api/v1/services/service/`),
            axios.get(`${URL_API}api/v1/services/article/`),
            axios.get(`${URL_API}api/v1/services/title/`),
          ]);

        setData({
          services: servicesResponse.data,
          article: articleResponse.data,
          title: titleResponse.data,
        });
      } catch (err) {
        setError("Ошибка загрузки данных");
        console.error("Ошибка при загрузке данных:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    axios(`${URL_API}api/v1/services/detail/`).then(({ data }) =>
      setServicesList(data)
    );
    axios(`${URL_API}api/v1/services/program/`).then(({ data }) =>
      setServicesProgramList(data)
    );
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  const { services, article, title } = data;
  const service = services[0] || {};
  const titles = title[0] || {};

  const localizedTitle = (title) => {
    switch (lang) {
      case "ru":
        return title.title_ru;
      case "en":
        return title.title_en;
      default:
        return title.title_ky;
    }
  };

  const localizedDescription = (description) => {
    switch (lang) {
      case "ru":
        return description.description_ru;
      case "en":
        return description.description_en;
      default:
        return description.description_ky; // Резервное значение
    }
  };

  return (
    <div className="Services">
      <div
        className="page-banner"
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      >
        <div className="container">
          <div className="page-main-text-block">
            <h1
              className="page-title"
              dangerouslySetInnerHTML={{ __html: localizedTitle(service) }}
            ></h1>
            <p
              className="page-description"
              dangerouslySetInnerHTML={{
                __html: localizedDescription(service),
              }}
            ></p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="page-main-text-block-mobile">
          <h1
            className="page-title-mobile"
            dangerouslySetInnerHTML={{ __html: localizedTitle(service) }}
          ></h1>
          <p
            className="page-description-mobile"
            dangerouslySetInnerHTML={{ __html: localizedDescription(service) }}
          ></p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {servicesList.map((item, idx) => {
            return (
              <div
              key={item.id}
                className={
                  idx % 2 === 0
                    ? "row row-gap-60"
                    : "row Services-reverse-row row-gap-60"
                }
              >
                <div className="col-6">
                  <img src={item.image} alt="" className="Services-list-img" />
                </div>

                <div className="col-6">
                  <h3
                    className="Services-list-title"
                    dangerouslySetInnerHTML={{
                      __html:
                        lang === "ru"
                          ? item.title
                          : lang === "en"
                          ? item.title_en
                          : item.title_ky,
                    }}
                  ></h3>
                  <p
                    className="Services-list-description"
                    dangerouslySetInnerHTML={{
                      __html:
                        lang === "ru"
                          ? item.description
                          : lang === "en"
                          ? item.description_en
                          : item.description_ky,
                    }}
                  ></p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h1
            className="Services-h1"
            dangerouslySetInnerHTML={{ __html: localizedTitle(titles) }}
          ></h1>


          {/* Articles API */}
          <Slider list={article} detail={true} detailUrl="/services/article" />
          {/* Articles API */}
        </div>
      </section>

      <section className="section">
        <div className="container">
          {servicesProgramList.map((item, idx) => {
            return (
              <div
              key={item.id}
                className={
                  idx % 2 === 0
                    ? "row row-gap-60"
                    : "row Services-reverse-row row-gap-60"
                }
              >
                <div className="col-6">
                  <img src={item.image} alt="" className="Services-list-img" />
                </div>

                <div className="col-6">
                  <h3
                    className="Services-list-title"
                    dangerouslySetInnerHTML={{
                      __html:
                        lang === "ru"
                          ? item.title
                          : lang === "en"
                          ? item.title_en
                          : item.title_ky,
                    }}
                  ></h3>
                  <p
                    className="Services-list-description"
                    dangerouslySetInnerHTML={{
                      __html:
                        lang === "ru"
                          ? item.description
                          : lang === "en"
                          ? item.description_en
                          : item.description_ky,
                    }}
                  ></p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Services;
