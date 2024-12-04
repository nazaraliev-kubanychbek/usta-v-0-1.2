import "./AmbassadorCategory.scss";
import { URL_API } from "../../../Futures/URLAPI";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CategoryBlock from "../CategoryBlock/CategoryBlock";
import axios from "axios";
import AmbassadorList from "../AmbassadorList/AmbassadorList";

const AmbassadorCategory = () => {
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
    <div>
      <div
        className="page-banner"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="container">
          <div className="page-main-text-block">
            <h1
              className="page-title"
              dangerouslySetInnerHTML={{
                __html:
                  lang === "ru"
                    ? data.title_ru
                    : lang === "en"
                    ? data.title_en
                    : data.title_ky,
              }}
            ></h1>
            <p
              className="page-description"
              dangerouslySetInnerHTML={{
                __html:
                  lang === "ru"
                    ? data.description_ru
                    : lang === "en"
                    ? data.description_en
                    : data.description_ky,
              }}
            ></p>
          </div>
        </div>
      </div>

    <div className="container">
    <div className="page-main-text-block-mobile">
              <h1
                className="page-title-mobile"
                dangerouslySetInnerHTML={{
                  __html:
                    lang === "ru"
                      ? data.title_ru
                      : lang === "en"
                      ? data.title_en
                      : data.title_ky,
                }}
              ></h1>
              <p
                className="page-description-mobile"
                dangerouslySetInnerHTML={{
                  __html:
                    lang === "ru"
                      ? data.description_ru
                      : lang === "en"
                      ? data.description_en
                      : data.description_ky,
                }}
              ></p>
            </div>
    </div>

    <section className="section">
        <div className="container">
        <CategoryBlock />
        </div>
    </section>

    <section className="section">
        <div className="container">
        <AmbassadorList />
        </div>
    </section>

    </div>
  );
};

export default AmbassadorCategory;
