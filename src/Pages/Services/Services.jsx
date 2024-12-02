import "./Services.scss";
import InfoBlock from "../Home/Blocks/InfoBlock";
import InfoBlockService from "../Home/Blocks/InfoBlock";
import "../Home/Home.scss";
import "../../Widgets/ui/scss/styles.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { URL_API } from "../../Futures/URLAPI";

function Services() {
  const lang = useSelector((state) => state.reducer.lang);

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
        const [servicesResponse, articleResponse, titleResponse] = await Promise.all([
          axios.get(`${URL_API}api/v1/services/service/`),
          axios.get(`${URL_API}api/v1/services/article/`),
          axios.get(`${URL_API}api/v1/services/title/`)
          ]);

        setData({
          services: servicesResponse.data,
          article: articleResponse.data,
          title: titleResponse.data,
        });
      } catch (err) {
        setError('Ошибка загрузки данных');
        console.error("Ошибка при загрузке данных:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  const { services, article, title } = data;
  const service = services[0] || {};
  const titles = title[0] || {};

  const localizedTitle = (title) => {
    switch (lang) {
      case 'ru':
        return title.title_ru;
      case 'en':
        return title.title_en;
      default:
        return title.title_ky;
    }
  };

  const localizedDescription = (description) => {
    switch (lang) {
      case 'ru':
        return description.description_ru;
      case 'en':
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
          backgroundImage: `url(${service.image})`
        }}
      >
        <div className="container">
          <div className="page-main-text-block">
            {/* Локализуем заголовок и описание */}
            <h1 className="page-title" dangerouslySetInnerHTML={{ __html: localizedTitle(service) }}></h1>
            <p className="page-description" dangerouslySetInnerHTML={{ __html: localizedDescription(service) }}></p>
          </div>
        </div>
      </div>


        <section className="section">
        <InfoBlockService
        mode="html"
        btn={"null"}
        URL="api/v1/services/detail/"
      />
        </section>

        <section className="section">
        <div className="container">
        <h1 className="Services-h1" dangerouslySetInnerHTML={{ __html: localizedTitle(titles) }}></h1>

        {/* Articles API */}
        <div className="services-card-scroll">
          <div className="Services-h1-imgs">
            {article.map((item, index) => (
              <div className="Services-img-card" key={index}>
                <img
                  className="Services-h1-imgs-img"
                  src={item.image || 'default-image-url'}
                  alt={item.title || "Image"}
                />
                {/* Локализуем заголовок для каждого элемента статьи */}
                <p className="Services-h1-imgs-img-title" dangerouslySetInnerHTML={{ __html: localizedTitle(item) }}></p>
              </div>
            ))}
          </div>
        </div>

        {/* Articles API */}
      </div>
        </section>


<section className="section">
<InfoBlock
        mode="html"
        btn={"true"}
        URL="api/v1/services/program/"
      />
</section>

    </div>
  );
}

export default Services;
