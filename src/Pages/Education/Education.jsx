import { useState, useEffect } from "react";
import axios from "axios";
import "./Education.scss";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { URL_API } from "../../Futures/URLAPI";

function Education() {
  const [educationData, setEducationData] = useState(null);
  const [educationCardsData, setEducationCardsData] = useState([]);
  const [educationVideoData, setEducationVideoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const lang = useSelector((state) => state.reducer.lang);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const educationResponse = await axios.get(
          `${URL_API}api/v1/education/education/`
        );
        const cardsResponse = await axios.get(
          `${URL_API}api/v1/education/cards/`
        );
        const videosResponse = await axios.get(
          `${URL_API}api/v1/education/videos/`
        );

        setEducationData(educationResponse.data[0]);
        setEducationCardsData(cardsResponse.data);
        setEducationVideoData(videosResponse.data);
        setLoading(false);
      } catch (e) {
        setError("Ошибка загрузки данных");
        setLoading(false);
      }
    };

    fetchData();
  }, [lang]);
  if (loading) return <p>Загрузка данных...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="education-page">
      <div className="education-body">
        <div className="page-banner"
        style={{
          backgroundImage: `url(${educationData.image})`
        }}
        >
          <div className="container">
            <div className="page-main-text-block">
            <h1

            className="page-title"
              dangerouslySetInnerHTML={{
                __html: educationData
                  ? lang === "ru"
                    ? educationData.title
                    : lang === "en"
                    ? educationData.title_en
                    : educationData.title_ky
                  : "",
              }}
            />
            <p
            className="page-description"
              dangerouslySetInnerHTML={{
                __html: educationData
                  ? lang === "ru"
                    ? educationData.description
                    : lang === "en"
                    ? educationData.description_en
                    : educationData.description_ky
                  : "",
              }}
            />
            </div>

          </div>
        </div>
      </div>

      <div className="container">
            <div className="page-main-text-block-mobile">
            <h1

            className="page-title-mobile"
              dangerouslySetInnerHTML={{
                __html: educationData
                  ? lang === "ru"
                    ? educationData.title
                    : lang === "en"
                    ? educationData.title_en
                    : educationData.title_ky
                  : "",
              }}
            />
            <p
            className="page-description-mobile"
              dangerouslySetInnerHTML={{
                __html: educationData
                  ? lang === "ru"
                    ? educationData.description
                    : lang === "en"
                    ? educationData.description_en
                    : educationData.description_ky
                  : "",
              }}
            />
            </div>

          </div>


      <section className="section">
        <div className="container">
          {educationCardsData.map((card, index) => (
            <div className="education-content-item row-gap-60" key={index}>
              {index % 2 === 0 ? (
                <div className="row2">
                  <div className="col-6">
                    <img
                      className="education-img"
                      src={card.image}
                      alt={card.title}
                    />
                  </div>
                  <div className="col-6">
                    <div className="education-text">
                      <h2
                        className="education-title"
                        dangerouslySetInnerHTML={{
                          __html:
                            lang === "ru"
                              ? card.title
                              : lang === "en"
                              ? card.title_en
                              : card.title_ky,
                        }}
                      />
                      <p
                        className="education-discription"
                        dangerouslySetInnerHTML={{
                          __html:
                            lang === "ru"
                              ? card.description
                              : lang === "en"
                              ? card.description_en
                              : card.description_ky,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row2 row2-reverse">
                  <div className="col-6">
                    <div className="education-text">
                      <h2
                        className="education-title"
                        dangerouslySetInnerHTML={{
                          __html:
                            lang === "ru"
                              ? card.title
                              : lang === "en"
                              ? card.title_en
                              : card.title_ky,
                        }}
                      />
                      <p
                        className="education-discription"
                        dangerouslySetInnerHTML={{
                          __html:
                            lang === "ru"
                              ? card.description
                              : lang === "en"
                              ? card.description_en
                              : card.description_ky,
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <img
                      className="education-img"
                      src={card.image}
                      alt={card.title}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}

          {educationVideoData.map((video, index) => (
            <div className="education-content-item" key={index}>
              {index % 2 === 0 ? (
                <div className="row2 education-row2 row-gap-60">
                  <div className="col-6 education-col-6">
                    <ReactPlayer
                      url={video.video_url}
                      className="education-reactplayer"
                    />
                  </div>
                  <div className="col-6 education-col-6">
                    <div className="education-text">
                      <h2
                        className="education-title"
                        dangerouslySetInnerHTML={{
                          __html:
                            lang === "ru"
                              ? video.title
                              : lang === "en"
                              ? video.title_en
                              : video.title_ky,
                        }}
                      />
                      <p
                        className="education-discription"
                        dangerouslySetInnerHTML={{
                          __html:
                            lang === "ru"
                              ? video.description
                              : lang === "en"
                              ? video.description_en
                              : video.description_ky,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row2 education-row2 row-gap-60 education-row2-reverse">
                  <div className="col-6 education-col-6">
                    <div className="education-text">
                      <h2
                        className="education-title"
                        dangerouslySetInnerHTML={{
                          __html:
                            lang === "ru"
                              ? video.title
                              : lang === "en"
                              ? video.title_en
                              : video.title_ky,
                        }}
                      />
                      <p
                        className="education-discription"
                        dangerouslySetInnerHTML={{
                          __html:
                            lang === "ru"
                              ? video.description
                              : lang === "en"
                              ? video.description_en
                              : video.description_ky,
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-6 education-col-6">
                    <ReactPlayer
                      url={video.video_url}
                      className="education-reactplayer"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Education;
