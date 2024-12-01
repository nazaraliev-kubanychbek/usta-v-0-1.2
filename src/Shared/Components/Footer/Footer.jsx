import logo from "../../Images/logo.svg";
import "./footer.scss";
import React, { useEffect, useState } from "react";
import { URL_API } from "../../../Futures/URLAPI";
import insta from "../../Images/social/instagram.png";
import linkedIn from "../../Images/social/linkedin.png";
import telegram from "../../Images/social/telegram.png";
import youtube from "../../Images/social/YouTube.png";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import BYGEEKSPRO from "../../Images/BY GEEKS PRO.png";
import axios from "axios";
import { setSelectedCategory } from "../../../Futures/reducers/reducer";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    //behavior: "smooth"
  });
};

const Footer = () => {
  const lang = useSelector((s) => s.reducer.lang);
  const [contactInfo, setContactInfo] = useState([]);
  const [contactInfoPhone, setContactInfoPhone] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${URL_API}api/v1/contacts/emails/`)
      .then((response) => {
        setContactInfo(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${URL_API}api/v1/contacts/contacts/`)
      .then((response) => {
        setContactInfoPhone(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="padding-top-50px">
      <div className="footer">
        <div className="container">
          <div className="footer-elements">
            <div className="footer-elements-column">
              <img className="footer-elements-logo" src={logo} alt="Logo" />
            </div>
            <div className="footer-elements-column">
              <h1>
                {lang === "ru"
                  ? "Навигация"
                  : lang === "en"
                  ? "Navigation"
                  : "Навигация"}
              </h1>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
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
                    to="/community"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
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
                    to="/events"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
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
                    onClick={()=>{
                      dispatch(setSelectedCategory('all'))
                      scrollToTop()
                    }}
                    to="/membership"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                   
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
                    to="/education"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
                  >
                    {lang === "ru"
                      ? "Образование и сертификаты"
                      : lang === "en"
                      ? "Education and certification"
                      : "Билим жана сертификаттар"}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-element-column-mobile">
              <h1>
                {lang === "ru"
                  ? "Навигация"
                  : lang === "en"
                  ? "Navigation"
                  : "Навигация"}
              </h1>
              <ul style={{ paddingTop: "43px" }}>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
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
                    to="/ambassadorship"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
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
                    to="/participation"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
                  >
                    {lang === "ru"
                      ? "Участие в проектах"
                      : lang === "en"
                      ? "Participation"
                      : "Катышуу"}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div id="contacts" className="footer-elements-column-contacts">
              <h1>
                {" "}
                {lang === "ru"
                  ? "Контакты"
                  : lang === "en"
                  ? "Contacts"
                  : "Байланыштар"}
              </h1>
              {contactInfo ? (
                <>
              <a className="contact-tel" href={`tel:${contactInfoPhone.phone_number}`} dangerouslySetInnerHTML={{ __html: contactInfoPhone.phone_number}}></a>
              <a className="contact-mail" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
</>) : ("Загрузка....")}
              <div className="footer-elements-contacts">
                <a href="https://www.instagram.com/usta_international/">
                  <img
                    className="footer-elements-contacts-web"
                    src={insta}
                    alt="Instagram"
                  />
                </a>
                <a href="https://www.youtube.com/watch?v=_LTyF2adV_8&list=PLr-7qpmyaPYyWxZRjb9NcXDh64hLS_6wA">
                  <img
                    className="footer-elements-contacts-web"
                    src={youtube}
                    alt="YouTube"
                  />
                </a>
                <a href="https://t.me/usta_media">
                  <img
                    className="footer-elements-contacts-web"
                    src={telegram}
                    alt="Telegram"
                  />
                </a>
                <img
                  className="footer-elements-contacts-web"
                  src={linkedIn}
                  alt="LinkedIn"
                />
              </div>
            </div>
            <div className="footer-element-column-mobile">
              <img className="footer-elements-logo" src={logo} alt="Logo" />
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
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
                    to="/community"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
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
                    to="/events"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
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
                    to="/membership"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
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
                    to="/education"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
                  >
                    {lang === "ru"
                      ? "Образование и сертификаты"
                      : lang === "en"
                      ? "Education and certification"
                      : "Билим жана сертификаттар"}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-element-column-mobile">
              <h1>
                {lang === "ru"
                  ? "Навигация"
                  : lang === "en"
                  ? "Navigation"
                  : "Навигация"}
              </h1>
              <ul style={{ paddingTop: "43px" }}>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
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
                    to="/ambassadorship"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
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
                    to="/participation"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={scrollToTop}
                  >
                    {lang === "ru"
                      ? "Участие в проектах"
                      : lang === "en"
                      ? "Participation"
                      : "Катышуу"}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-element-column-mobile">
              <h1>
                {lang === "ru"
                  ? "Контакты"
                  : lang === "en"
                  ? "Contacts"
                  : "Байланыштар"}
              </h1>
              {contactInfo ? (
                <>
                <a className="contact-tel" href={`tel:${contactInfoPhone.phone_number}`}>{contactInfoPhone.phone_number}</a>
                <a className="contact-mail" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
</>) : ("Загрузка....")}
            </div>
            <div className="footer-element-column-mobile">
              <div className="footer-elements-contacts">
                <a href="https://www.instagram.com/usta_international/">
                  <img
                    className="footer-elements-contacts-web"
                    src={insta}
                    alt="Instagram"
                  />
                </a>
                <a href="https://www.youtube.com/watch?v=_LTyF2adV_8&list=PLr-7qpmyaPYyWxZRjb9NcXDh64hLS_6wA">
                  <img
                    className="footer-elements-contacts-web"
                    src={youtube}
                    alt="YouTube"
                  />
                </a>
                <a href="https://t.me/usta_media">
                  <img
                    className="footer-elements-contacts-web"
                    src={telegram}
                    alt="Telegram"
                  />
                </a>
                <img
                  className="footer-elements-contacts-web"
                  src={linkedIn}
                  alt="LinkedIn"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "16px",
              height: "auto",
            }}
          >
            <a href="https://geeks.kg/geeks-pro">
              <img src={BYGEEKSPRO} alt="BY GEEKS PRO" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
