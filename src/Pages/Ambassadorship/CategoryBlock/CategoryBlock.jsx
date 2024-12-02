import "./CategoryBlock.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import burgerMenuOpen from "./img/burger-icon-open.svg";
import { setSelectedCategory } from "../../../Futures/reducers/reducer";
import propIcon from "./img/documents.svg";
import servicesIcon from "./img/services.svg";
import { useNavigate } from "react-router-dom";

const CategoryBlock = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const lang = useSelector((s) => s.reducer.lang);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {


    axios("https://new-usta.webtm.ru/api/v1/ambassadorship/category/").then(
      ({ data }) => {


        setCategoryData(data)
      }
    );
  }, []);
  return (
    <div className="ambassador-category-menu">
      <div className="ambassador-category-menu-head">
        <h3 className="ambassador-category-menu-head-title">
          {lang === "ru"
            ? "Категории"
            : lang === "en"
            ? "Categories"
            : "Категориялар"}
        </h3>
        <button
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="ambassador-category-menu-head-btn"
        >
          <img src={burgerMenuOpen} alt="" />
        </button>
      </div>
      <div
        style={
          showMenu
            ? {
                height: `${60 * (categoryData.length + 2 )}px`,
                opacity: 1,
              }
            : {}
        }
        className="ambassador-category-menu-list"
      >
        <div
          className="ambassador-category-menu-list-item"
          onClick={() => {
            setShowMenu(false);
            dispatch(setSelectedCategory("all"));
            navigate('/requisites');
          }}
        >
          <img
            src={propIcon}
            alt=""
            className="ambassador-category-menu-list-item-icon"
          />
          <p className="ambassador-category-menu-list-item-text">
            {lang === "ru"
              ? "Реквизиты"
              : lang === "en"
              ? "Requisites"
              : "Реквизиттер"}
          </p>
        </div>

        <div
          className="ambassador-category-menu-list-item"
          onClick={() => {
            setShowMenu(false);
            dispatch(setSelectedCategory("all"));
            navigate('/services/detail');
          }}
        >
          <img
            src={servicesIcon}
            alt=""
            className="ambassador-category-menu-list-item-icon"
          />
          <p className="ambassador-category-menu-list-item-text">
            {lang === "ru"
              ? "Услуги"
              : lang === "en"
              ? "Services"
              : "Кызматтар"}
          </p>
        </div>
        {categoryData.map((item) => {
          return (
            <div
              className="ambassador-category-menu-list-item"
              key={item.id}
              onClick={() => {
                setShowMenu(false);
                dispatch(setSelectedCategory(item.id));
                navigate(`/ambassadorship/category/${item.id}`)
              }}
            >
              <img
                src={item.logo_image}
                alt=""
                className="ambassador-category-menu-list-item-icon"
              />
              <p className="ambassador-category-menu-list-item-text">
                {lang === "ru"
                  ? item.title
                  : lang === "en"
                  ? item.title_en
                  : item.title_ky}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBlock;
