import { useEffect, useState } from "react";
import axios from "axios";
import { URL_API } from "../../../Futures/URLAPI";
import { InfoBlock } from "../CardEvent";
import { useSelector } from "react-redux";

const InfoBlocks = ({ URL, mode, btn, video }) => {
  const [infoBlockData, setInfoBlockData] = useState([]);
  const [error, setError] = useState(null);
  const lang = useSelector((s) => s.reducer.lang);

  useEffect(() => {
    axios
      .get(`${URL_API}${URL}`)
      .then((response) => {
        setInfoBlockData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Произошла ошибка при загрузке данных");
      });
    console.log(lang);
  }, [URL, lang]); // Добавлен lang в зависимости

  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      {mode === "json"
        ? infoBlockData.map((block, index) => (
            <InfoBlock
              key={block.id}
              p={
                lang === "ru"
                  ? block.description
                  : lang === "en"
                  ? block.description_en
                  : block.description_ky
              }
              head={
                lang === "ru"
                  ? block.title
                  : lang === "en"
                  ? block.title_en
                  : block.title_ky
              }
              InfoImg={block.image}
              btn={btn === "true" ? "true" : "false"}
              URL={block.url_button}
              reversed={index % 2 === 1 ? "true" : "false"}
            />
          ))
        : infoBlockData.map((block, index) => (
            <div  className="row-gap-60" key={block.id}>
              <div className="container">
                <div
                  className={`InfoBlock ${index % 2 === 1 ? "reverse" : ""}`}
                >
                  <div className="InfoBlock-img">
                    <img src={block.image} alt="Info block" />
                  </div>
                  <div className="InfoBlock-text">
                    <h1
                      dangerouslySetInnerHTML={{
                        __html:
                          lang === "ru"
                            ? block.title
                            : lang === "en"
                            ? block.title_en
                            : block.title_ky,
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          lang === "ru"
                            ? block.description
                            : lang === "en"
                            ? block.description_en
                            : block.description_ky,
                      }}
                    />
                    {btn === "true" && (
                      <div className="InfoBlock-text-btn">
                        <a href={block.url_button}>
                          {lang === "ru"
                            ? "Подробнее"
                            : lang === "en"
                            ? "See more"
                            : "көбүрөөк маалымат"}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default InfoBlocks;
