import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { URL_API } from "../../Futures/URLAPI";
import "./Ambassadorship.scss";
import CategoryBlock from "./CategoryBlock/CategoryBlock";
import AmbassadorList from "./AmbassadorList/AmbassadorList";

function Ambassadorship() {
  const lang = useSelector((s) => s.reducer.lang);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL_API}api/v1/ambassadorship/banner/`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });


  });

  return (
    <div className="ambassadorship">
      <div
        className="main-screen"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="container">
          <div className="column">
            <div className="main-screen-block">
              <div
                className="main-screen-head"
                dangerouslySetInnerHTML={{
                  __html:
                    lang === "ru"
                      ? data.title_ru
                      : lang === "en"
                      ? data.title_en
                      : data.title_ky,
                }}
              ></div>
              <div
                className="main-screen-text"
                dangerouslySetInnerHTML={{
                  __html:
                    lang === "ru"
                      ? data.description_ru
                      : lang === "en"
                      ? data.description_en
                      : data.description_ky,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main-screen-blockAlt">
          <div
            className="main-screen-headAlt"
            dangerouslySetInnerHTML={{
              __html:
                lang === "ru"
                  ? data.title_ru
                  : lang === "en"
                  ? data.title_en
                  : data.title_ky,
            }}
          ></div>
          <div
            className="main-screen-textAlt"
            dangerouslySetInnerHTML={{
              __html:
                lang === "ru"
                  ? data.description_ru
                  : lang === "en"
                  ? data.description_en
                  : data.description_ky,
            }}
          ></div>
        </div>
        <CategoryBlock />

        <AmbassadorList />



      </div>
    </div>
  );
}

export default Ambassadorship;
