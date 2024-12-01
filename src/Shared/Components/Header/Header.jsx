﻿import { useState, useEffect } from "react";
import "./Header.scss";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../Images/logo.svg";
import burgerOpenIcon from "./img/burger-icon-open.svg";
import burgerCloseIcon from "./img/burger-icon-close.svg";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import { useDispatch, useSelector } from "react-redux";
import { setLang, setSelectedCategory } from "../../../Futures/reducers/reducer";
//import PopUp from './Float/PopUp'

import arrow from "./img/arrow.png";

function Header() {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const lang = useSelector((s) => s.reducer.lang);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen((prevState) => !prevState);
  };

  const toggleLanguageUpTop = () => {
    setIsLanguageDropdownOpen((prevState) => prevState);
  };

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [showBurger, setShowBurger] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const scrollToBottom = (duration = 500) => {
    const start = window.pageYOffset;
    const end = document.body.scrollHeight - window.innerHeight;
    const distance = end - start;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, start + distance * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container">
      <HeaderMobile showBurger={showBurger} setShowBurger={setShowBurger} />
      <div className={`Header ${scrolled ? "Header-scrolled" : ""}`}>
        <div className="row header-row">
          {!scrolled ? (
            <>
              <div className="Header-topline">
                <div className="Header-topline__logo">
                  <img src={Logo} alt="Logo" />
                </div>
                <div className="Header-topline__options">
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
                      <p
                        onClick={() => {
                          dispatch(setLang("ru"));
                          setIsLanguageDropdownOpen(false);
                        }}
                      >
                        RU
                      </p>
                      <p
                        onClick={() => {
                          dispatch(setLang("en"));
                          setIsLanguageDropdownOpen(false);
                        }}
                      >
                        EN
                      </p>
                      <p
                        onClick={() => {
                          dispatch(setLang("kg"));
                          setIsLanguageDropdownOpen(false);
                        }}
                      >
                        KG
                      </p>
                    </div>
                  )}

                  <div className="Header-topline__options-btn">
                    {lang === "ru"
                      ? "Связаться с нами"
                      : lang === "en"
                      ? "Connect with us"
                      : "Байланышу"}
                  </div>
                </div>
              </div>
              <nav>
                <ul>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "isActive" : "")}
                      to="/"
                    >
                      {lang === "ru"
                        ? "Главное"
                        : lang === "en"
                        ? "Main Page"
                        : "Башкы бет"}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "isActive" : "")}
                      to="/community"
                    >
                      {lang === "ru"
                        ? "О Сообществе"
                        : lang === "en"
                        ? "About community"
                        : "Коомчулук жөнүндө"}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "isActive" : "")}
                      to="/events"
                    >
                      {lang === "ru"
                        ? "Мероприятия"
                        : lang === "en"
                        ? "Events"
                        : "Маарекелер"}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "isActive" : "")}
                      to="/membership"
                    >
                      {lang === "ru"
                        ? "Членство"
                        : lang === "en"
                        ? "Membership"
                        : "Мүчөлүк"}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "isActive" : "")}
                      to="/education"
                    >
                      {lang === "ru"
                        ? "Образование и сертификаты"
                        : lang === "en"
                        ? "Education and certification"
                        : "Билим жана сертификаттар"}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "isActive" : "")}
                      to="/services"
                    >
                      {lang === "ru"
                        ? "Услуги"
                        : lang === "en"
                        ? "Services"
                        : "Кызматтар"}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                    onClick={()=>{
                      dispatch(setSelectedCategory('all'))
                    }}
                      className={({ isActive }) => (isActive ? "isActive" : "")}
                      to="/ambassadorship"
                    >
                      {lang === "ru"
                        ? "Амбассадорство"
                        : lang === "en"
                        ? "Ambassadorship"
                        : "Элчилик"}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "isActive" : "")}
                      to="/participation"
                    >
                      {lang === "ru"
                        ? "Участие в проектах"
                        : lang === "en"
                        ? "Participation"
                        : "Катышуу"}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "isActive" : "")}
                      to="/contacts"
                    >
                      {lang === "ru"
                        ? "Контакты"
                        : lang === "en"
                        ? "Contacts"
                        : "Байланыштар"}
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="header-mobile">
                <div className="header-mobile-logo">
                  <img src={Logo} alt="Logo" />
                </div>
                <button
                  className="header-burger-btn"
                  onClick={() => {
                    setShowBurger(!showBurger);
                  }}
                >
                  <img
                    src={showBurger ? burgerCloseIcon : burgerOpenIcon}
                    alt=""
                  />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="Header-scrolled-topline__logo">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="Header-scrolled-elements">
                <div className="Header-scrolled-topline">
                  <div className="Header-scrolled-topline__options">
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
                        <p
                          onClick={() => {
                            dispatch(setLang("ru"));
                            setIsLanguageDropdownOpen(false);
                          }}
                        >
                          RU
                        </p>
                        <p
                          onClick={() => {
                            dispatch(setLang("en"));
                            setIsLanguageDropdownOpen(false);
                          }}
                        >
                          EN
                        </p>
                        <p
                          onClick={() => {
                            dispatch(setLang("kg"));
                            setIsLanguageDropdownOpen(false);
                          }}
                        >
                          KG
                        </p>
                      </div>
                    )}

                    <div className="Header-scrolled-topline__options-btn">
                      Связаться с нами
                    </div>
                  </div>
                </div>
                <nav>
                  <ul>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "isActive" : ""
                        }
                        to="/"
                      >
                        {lang === "ru"
                          ? "Главное"
                          : lang === "en"
                          ? "Main Page"
                          : "Башкы бет"}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "isActive" : ""
                        }
                        to="/community"
                      >
                        {lang === "ru"
                          ? "О Сообществе"
                          : lang === "en"
                          ? "About community"
                          : "Коомчулук жөнүндө"}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "isActive" : ""
                        }
                        to="/events"
                      >
                        {lang === "ru"
                          ? "Мероприятия"
                          : lang === "en"
                          ? "Events"
                          : "Маарекелер"}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "isActive" : ""
                        }
                        to="/membership"
                      >
                        {lang === "ru"
                          ? "Членство"
                          : lang === "en"
                          ? "Membership"
                          : "Мүчөлүк"}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "isActive" : ""
                        }
                        to="/education"
                      >
                        {lang === "ru"
                          ? "Образование и сертификаты"
                          : lang === "en"
                          ? "Education and certification"
                          : "Билим жана сертификаттар"}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "isActive" : ""
                        }
                        to="/services"
                      >
                        {lang === "ru"
                          ? "Услуги"
                          : lang === "en"
                          ? "Services"
                          : "Кызматтар"}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={()=>{
                          dispatch(setSelectedCategory('all'))
                        }}
                        className={({ isActive }) =>
                          isActive ? "isActive" : ""
                        }
                        to="/ambassadorship"
                      >
                        {lang === "ru"
                          ? "Амбассадорство"
                          : lang === "en"
                          ? "Ambassadorship"
                          : "Элчилик"}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "isActive" : ""
                        }
                        to="/participation"
                      >
                        {lang === "ru"
                          ? "Участие в проектах"
                          : lang === "en"
                          ? "Participation"
                          : "Катышуу"}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "isActive" : ""
                        }
                        to="/contacts"
                      >
                        {lang === "ru"
                          ? "Контакты"
                          : lang === "en"
                          ? "Contacts"
                          : "Байланыштар"}
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-mobile">
                <div className="header-mobile-logo">
                  <img src={Logo} alt="Logo" />
                </div>
                <button
                  className="header-burger-btn"
                  onClick={() => {
                    setShowBurger(!showBurger);
                  }}
                >
                  <img
                    src={showBurger ? burgerCloseIcon : burgerOpenIcon}
                    alt=""
                  />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
