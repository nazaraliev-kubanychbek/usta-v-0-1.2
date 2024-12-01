import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { URL_API } from "../../../Futures/URLAPI";
import { useSelector } from "react-redux";

import documents from "./documents.svg";
import houses from "./houses.svg";
import fields from "./fields.svg";
import instrument from "./instruments.svg";
import technic from "./technic.svg";
import comerc from "./comercial.svg";
import services from "./services.svg";

import burgerMenuOpen from "../../../Shared/Components/Header/img/burger-icon-open.svg";
import burgerMenuClose from "../../../Shared/Components/Header/img/burger-icon-close.svg";


function MiniInfoBlocks() {
  const [miniInfoBlockData, setMiniInfoBlockData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [error, setError] = useState(null);
  const lang = useSelector((s) => s.reducer.lang);
  const navigate = useNavigate();

  const categories = [
    {
      id: "props_category",
      img: documents,
      name:
        lang === "ru" ? "Реквизиты" : lang === "en" ? "Details" : "Реквизиттер",
    },
    {
      id: "immovables_category",
      img: houses,
      name:
        lang === "ru"
          ? "Недвижимость"
          : lang === "en"
          ? "immovables"
          : "Кыймылсыз мүлк",
    },
    {
      id: "landplot_category",
      img: fields,
      name: lang === "ru" ? "Участки" : lang === "en" ? "Fields" : "Аймактар",
    },
    {
      id: "equipment_category",
      img: instrument,
      name:
        lang === "ru" ? "Оборудование" : lang === "en" ? "Equipment" : "Жабдуу",
    },
    {
      id: "technic_category",
      img: technic,
      name: lang === "ru" ? "Техника" : lang === "en" ? "Technic" : "Техника",
    },
    {
      id: "commercial_offers_news",
      img: comerc,
      name:
        lang === "ru"
          ? "Коммерческие предложения"
          : lang === "en"
          ? "Commercial offers"
          : "Коммерциялык сунуштар",
    },
    {
      id: "services",
      img: services,
      name: lang === "ru" ? "Услуги" : lang === "en" ? "Details" : "Кызматтар",
    },
  ];

  const fetchData = async (categoryId = null) => {
    try {
      if (categoryId) {
        const response = await axios.get(`${URL_API}api/v1/ambass/${categoryId}/`);
        setMiniInfoBlockData(response.data);
      } else {
        const requests = categories.map((category) =>
          axios.get(`${URL_API}api/v1/ambass/${category.id}/`)
        );
        const results = await Promise.all(requests);
        const combinedData = results.flatMap((result) => result.data);
        setMiniInfoBlockData(combinedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Произошла ошибка при загрузке данных");
    }
  };

  useEffect(() => {
    fetchData(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsMenuOpen(false);
  };

  const handleBlockClick = (id) => {
    // Перенаправление на страницу с id
    navigate(`/ambassadorship/props_category/${id}`);
  };

  const renderMiniInfoBlocks = () => {
    return miniInfoBlockData.map((item, index) => (
      <div
        className="miniInfoBlock"
        key={index}
        onClick={() => handleBlockClick(item.id)} // Обработчик клика
      >
        <div className="miniInfoBlock-img">
          <img
            className="miniInfoBlock-img__img"
            style={{ backgroundImage: `url(${item.image_banner})` }}
          />
        </div>
        <div className="miniInfoBlock-text">
          <div className="miniInfoBlock-text__title" dangerouslySetInnerHTML={{ __html: item.name_banner }}></div>
          <div className="miniInfoBlock-text__description">
            <p dangerouslySetInnerHTML={{ __html: item.actual_address }}></p>
            <p dangerouslySetInnerHTML={{ __html: item.inn }}></p>
            <p dangerouslySetInnerHTML={{ __html: item.kpp }}></p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container padding">
      <div className="categoriesChange">
        <div className="categoriesChange-title">Категории</div>
        <div
          className="categoriesChange-burgerMenu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            src={isMenuOpen ? burgerMenuClose : burgerMenuOpen}
            alt="burger menu"
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="categoriesList">
          {categories.map((category) => (
            <div
              key={category.id}
              className="categoryItem"
              onClick={() => handleCategoryClick(category.id)}
            >
              <img className="categoryItem__img" src={category.img} />
              <p className="categoryItem__text">{category.name}</p>
            </div>
          ))}
        </div>
      )}
      <div className="miniInfoBlockContainer">
        {error ? <p>{error}</p> : renderMiniInfoBlocks()}
      </div>
    </div>
  );
}

export default MiniInfoBlocks;
