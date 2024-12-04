import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

import { Slider } from "../Home/CardEvent";
import "./News.scss";
import { URL_API } from "../../Futures/URLAPI";


const News = () => {
    const lang = useSelector((state) => state.reducer.lang);
    const { id } = useParams();
    const [newsData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`${URL_API}api/v1/base/news/`)
            .then((response) => {
                setNewsData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError("Ошибка при загрузке новостей");
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    const cardDataNews = newsData.map((item) => ({
        type: "news",
        img: item.image,
        date: item.date,
        text:
            lang === "ru"
                ? item.title
                : lang === "en"
                ? item.title_en
                : item.title_ky,
    }));

    const card = cardDataNews[id];

    if (!card) {
        return <div>Карточка не найдена</div>;
    }

    return (
        <div className="container">

            <div className="News padding-bottom-50px">
                <div className="News-head">
                    <div className="News-head-header">{lang === "ru" ? "Новости" : lang === "en" ? "News" : "Жаңылыктар"}</div>
                    <div className="News-date">{card.date}</div>
                </div>

                <div className="row">
                <div className="col-6">
                <img className="News-img" src={card.img} alt="Card Detail" />
                </div>
                <div className="col-6">
                <div className="News-content-text">{card.text}</div>
                </div>
            </div>
            </div>
            <Slider name={lang === "ru" ? "Новости" : lang === "en" ? "News" : "Жаңылыктар"} cards={cardDataNews} />
        </div>
    );
};

export default News;
