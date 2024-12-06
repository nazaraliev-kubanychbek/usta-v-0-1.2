import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.scss";
import InfoBlocks from "./Blocks/InfoBlock";
import ServiceTab from "../../Widgets/ServicesTab";
import { Slider } from "./CardEvent";
import { useSelector } from "react-redux";
import { URL_API } from "../../Futures/URLAPI";
import PartnerSlider from "../../Widgets/ui/PartnerSlider/PartnerSlider";
import SliderTeam from "../../Widgets/ui/Slider/Slider";
import { Link } from "react-router-dom";

function Home() {
  const lang = useSelector((s) => s.reducer.lang);
  const [homeListData, setHomeListData] = useState([]);
  const [data, setData] = useState([]);
  const [newsData, setNewsData] = useState([]);

  const newsImg = newsData.map((item) => item.image);
  const newsText = newsData.map((item) =>
    lang === "ru" ? item.title : lang === "en" ? item.title_en : item.title_ky
  );
  const newsDate = newsData.map((item) => item.date);

  const cardDataNews = newsImg.map((img, index) => ({
    type: "news",
    img,
    date: newsDate[index],
    text: newsText[index],
  }));

  const [teamData, setTeamData] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL_API}api/v1/base/teammember/`)
      .then((response) => {
        setTeamData(response.data);
        console.log(teamData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get(`${URL_API}api/v1/base/news/`)
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get(`${URL_API}api/v1/base/base/`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios(`${URL_API}api/v1/base/section/`).then(({ data }) =>
      setHomeListData(data)
    );
  }, []);

  return (
    <div className="home">
      <div
        className="page-banner"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="container">
          <div className="page-main-text-block">
            <div className="page-title">
              {lang === "ru"
                ? data.title_ru
                : lang === "en"
                ? data.title_en
                : data.title_ky}
            </div>
            <div className="page-description">
              {lang === "ru"
                ? data.description_ru
                : lang === "en"
                ? data.description_en
                : data.description_ky}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main-screen-blockAlt">
          <div className="main-screen-headAlt">
            {" "}
            {lang === "ru"
              ? data.title_ru
              : lang === "en"
              ? data.title_en
              : data.title_ky}
          </div>
          <div className="main-screen-textAlt">
            {" "}
            {lang === "ru"
              ? data.description_ru
              : lang === "en"
              ? data.description_en
              : data.description_ky}
          </div>
        </div>
      </div>

      <section className="section">
        <Slider
          name={
            lang === "ru" ? "Новости" : lang === "en" ? "News" : "Жаңылыктар"
          }
          cards={cardDataNews}
        />
      </section>

      <section className="section">
        <ServiceTab URL="api/v1/base/service/" />
      </section>
      <section className="section">
        <PartnerSlider />
      </section>
      <section className="section">
        <div className="container">
          {homeListData.map((item, idx) => {
            return (
              <div className={idx % 2 === 0 ? "row row-gap-60" : "row reverse row-gap-60"} key={item.id}>
                <div className="col-6">
                  <div className="home-section-block-images">
                    {
                      item.sections.map((element)=>{
                          return  <img src={element.image} alt="" className="home-section-block-images-img" />
                      })
                    }

                  </div>
                </div>
                <div className="col-6">
                  <div className="home-section-block-text">
                    <div className="home-section-block-text-top">
                      <h3
                        className="home-section-block-text-title"
                        dangerouslySetInnerHTML={{
                          __html:
                            lang === "ru"
                              ? item.title_ru
                              : lang === "en"
                              ? item.title_en
                              : item.title_ky,
                        }}
                      ></h3>
                      <p
                        className="home-section-block-text-description"
                        dangerouslySetInnerHTML={{
                          __html:
                            lang === "ru"
                              ? item.description_ru
                              : lang === "en"
                              ? item.description_en
                              : item.description_ky,
                        }}
                      ></p>
                    </div>

                    <Link
                    className="home-section-block-text-link"
                    to={`/home/section/${item.id}`} dangerouslySetInnerHTML={{
                          __html:
                            lang === "ru"
                              ? item.see_more_ru
                              : lang === "en"
                              ? item.see_more_en
                              : item.see_more_ky,
                        }}></Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="section">
        <InfoBlocks mode="html" URL="api/v1/base/commonmodels/" btn="true" />
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            {lang === "ru"
              ? "Наша команда"
              : lang === "en"
              ? "Our team"
              : "Биздин команда"}
          </h2>
          <SliderTeam
            member={true}
            list={teamData.map((item) => {
              return {
                ...item,
                image: item.photo,
                title: item.full_name,
                title_ru: item.full_name_ru,
                title_en: item.full_name_en,
                title_ky: item.full_name_ky,
                description: item.position,
                description_ru: item.position_ru,
                description_en: item.position_en,
                description_ky: item.description_ky,
              };
            })}
            detail={true}
            detailUrl="/member"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
