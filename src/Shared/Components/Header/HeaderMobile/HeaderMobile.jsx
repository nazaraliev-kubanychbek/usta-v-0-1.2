import "../Header.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setLang, setSelectedCategory } from "../../../../Futures/reducers/reducer";
import arrow from "../img/arrow.png";

const HeaderMobile = ({ showBurger, setShowBurger }) => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);


  const dispatch = useDispatch();
  const lang = useSelector((s) => s.reducer.lang);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen((prevState) => !prevState);
  };
  return (
    <div
      className={
        showBurger
          ? "header-mobile-burger header-mobile-burger-show"
          : "header-mobile-burger"
      }
    >
      <div className="header-mobile-burger-wrapper">
        <div className="header-mobile-burger-top">
          <div>
            <p
              className="Header-topline__options-text"
              onClick={toggleLanguageDropdown}
            >
              {lang.toUpperCase()}
              <img
                src={arrow}
                alt="arrow"
                className={`arrow-icon ${
                  isLanguageDropdownOpen ? "rotated" : ""
                }`}
              />
            </p>
            {isLanguageDropdownOpen && (
              <div className="language-dropdown">
                <p onClick={() => dispatch(setLang("ru"))}>RU</p>
                <p onClick={() => dispatch(setLang("en"))}>EN</p>
                <p onClick={() => dispatch(setLang("kg"))}>KG</p>
              </div>
            )}
          </div>
          <button className="Header-topline__options-btn"
          style={{
            border: 'none'
          }}
          >
          <a href="https://t.me/usta_media" target="_blank" style={{
            color: '#fff',
            textDecoration: 'none'
          }}>
                  {lang === "ru"
                      ? "Связаться с нами"
                      : lang === "en"
                      ? "Connect with us"
                      : "Байланышу"}
                      </a>
          </button>
        </div>
        <div className="header-mobile-burger-list">
          <NavLink
            onClick={() => {
              setShowBurger(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "header-mobile-burger-list-link mobile-active"
                : "header-mobile-burger-list-link"
            }
            to="/"
          >
            {lang === "ru"
              ? "Главная"
              : lang === "en"
              ? "Main Page"
              : "Башкы бет"}
          </NavLink>
          <NavLink
            onClick={() => {
              setShowBurger(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "header-mobile-burger-list-link mobile-active"
                : "header-mobile-burger-list-link"
            }
            to="/community"
          >
            {lang === "ru"
              ? "О Сообществе"
              : lang === "en"
              ? "About community"
              : "Коомчулук жөнүндө"}
          </NavLink>
          <NavLink
            onClick={() => {
              setShowBurger(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "header-mobile-burger-list-link mobile-active"
                : "header-mobile-burger-list-link"
            }
            to="/events"
          >
            {lang === "ru"
              ? "Мероприятия"
              : lang === "en"
              ? "Events"
              : "Маарекелер"}
          </NavLink>
          <NavLink
            onClick={() => {
              setShowBurger(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "header-mobile-burger-list-link mobile-active"
                : "header-mobile-burger-list-link"
            }
            to="/membership"
          >
            {lang === "ru"
              ? "Членство"
              : lang === "en"
              ? "Membership"
              : "Мүчөлүк"}
          </NavLink>
          <NavLink
            onClick={() => {
              setShowBurger(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "header-mobile-burger-list-link mobile-active"
                : "header-mobile-burger-list-link"
            }
            to="/education"
          >
            {lang === "ru"
              ? "Образование и сертификаты"
              : lang === "en"
              ? "Education and certification"
              : "Билим жана сертификаттар"}
          </NavLink>
          <NavLink
            onClick={() => {
              setShowBurger(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "header-mobile-burger-list-link mobile-active"
                : "header-mobile-burger-list-link"
            }
            to="/services"
          >
            {lang === "ru"
              ? "Услуги"
              : lang === "en"
              ? "Services"
              : "Кызматтар"}
          </NavLink>
          <NavLink
            onClick={() => {
              setShowBurger(false);

                dispatch(setSelectedCategory('all'))

            }}
            className={({ isActive }) =>
              isActive
                ? "header-mobile-burger-list-link mobile-active"
                : "header-mobile-burger-list-link"
            }
            to="/ambassadorship"
          >
            {lang === "ru"
              ? "Амбассадорство"
              : lang === "en"
              ? "Ambassadorship"
              : "Элчилик"}
          </NavLink>
          <NavLink
            onClick={() => {
              setShowBurger(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "header-mobile-burger-list-link mobile-active"
                : "header-mobile-burger-list-link"
            }
            to="/participation"
          >
            {lang === "ru"
              ? "Участие в проектах"
              : lang === "en"
              ? "Participation"
              : "Катышуу"}
          </NavLink>
          <NavLink
            onClick={() => {
              setShowBurger(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "header-mobile-burger-list-link mobile-active"
                : "header-mobile-burger-list-link"
            }
            to="/contacts"
          >
            {lang === "ru"
              ? "Контакты"
              : lang === "en"
              ? "Contacts"
              : "Байланыштар"}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
