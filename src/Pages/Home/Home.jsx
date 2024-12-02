import { useEffect, useState } from "react";
import axios from "axios";

import "./Home.scss";

import BigBlocks from "./Blocks/BigBlock";
import InfoBlocks from "./Blocks/InfoBlock";
import ServiceTab from "../../Widgets/ServicesTab";

import { PartnersTab, Slider } from "./CardEvent";

import { useSelector } from "react-redux";
import { URL_API } from "../../Futures/URLAPI";

function Home() {
  const lang = useSelector((s) => s.reducer.lang);
  const [HTMLraw, setHTMLraw] = useState(null);

  useEffect(() => {
    axios
      .get("url")
      .then((responce) => {
        setHTMLraw(responce.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  <div dangerouslySetInnerHTML={{ __html: HTMLraw }} />;

  //-----------------------------------------------------------------------

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL_API}api/v1/base/base/`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [ambasData, setAmbasData] = useState([]);

  //------------------------------------------------------------------------

  useEffect(() => {
    axios
      .get(`${URL_API}api/v1/community/partners/`)
      .then((response) => {
        setAmbasData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const images = ambasData.map((partner) => partner.image);

  const partners = images.map((image) => ({ img: image }));

  //console.log(partners);

  //-------------------------------------------------------------------------

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL_API}api/v1/base/news/`)
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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

  //console.log(cardDataNews); Р”Р•Р‘РђР“

  //--------------------------------------------------------------

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
  }, []);

  const teamImg = teamData.map((item) => item.photo);
  const teamName = teamData.map((item) =>
    lang === "ru"
      ? item.full_name_ru
      : lang === "en"
      ? item.full_name_en
      : item.full_name_ky
  );
  const teamPro = teamData.map((item) =>
    lang === "ru"
      ? item.position_ru
      : lang === "en"
      ? item.position_en
      : item.position_ky
  );

  const cardDataTeam = teamImg.map((img, index) => ({
    type: "team",
    img,
    name: teamName[index],
    pro: teamPro[index],
  }));

  //console.log(cardDataTeam);

  //-------------------------------------------------------------------------

  return (
    <div className="home">
      <div
        className="page-banner"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="container">

            <div className="page-main-text-block">
              <div className="main-screen-head page-title">
                {lang === "ru"
                  ? data.title_ru
                  : lang === "en"
                  ? data.title_en
                  : data.title_ky}
              </div>
              <div className="main-screen-text page-description">
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
          <div className="main-screen-headAlt">                {lang === "ru"
                  ? data.title_ru
                  : lang === "en"
                  ? data.title_en
                  : data.title_ky}</div>
          <div className="main-screen-textAlt">                {lang === "ru"
                  ? data.description_ru
                  : lang === "en"
                  ? data.description_en
                  : data.description_ky}</div>
        </div>
      </div>

            <section className="section">
            <Slider
        name={lang === "ru" ? "Новости" : lang === "en" ? "News" : "Жаңылыктар"}
        cards={cardDataNews}
      />
            </section>

<section className="section">
<ServiceTab URL="api/v1/base/service/" />
</section>
            <section className="section">
            <PartnersTab partners={partners} />
            </section>
            <section className="section">
            <BigBlocks mode="json" URL="api/v1/base/section/" />
            </section>
            <section className="section">
            <InfoBlocks mode="html" URL="api/v1/base/commonmodels/" btn="true" />
            </section>
            <section className="section">
            <Slider
        name={lang === "ru" ? "Команда" : lang === "en" ? "Team" : "Команда"}
        cards={cardDataTeam}
      />
            </section>






    </div>
  );
}

export default Home;
