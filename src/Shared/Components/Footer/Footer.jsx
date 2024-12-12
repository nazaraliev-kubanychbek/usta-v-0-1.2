import logo from "../../Images/logo.svg";
import "./footer.scss";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import BYGEEKSPRO from "../../Images/BY GEEKS PRO.png";
import { setSelectedCategory } from "../../../Futures/reducers/reducer";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    //behavior: "smooth"
  });
};

const Footer = () => {
  const lang = useSelector((s) => s.reducer.lang);
  const dispatch = useDispatch();
  const contacts = useSelector(s => s.reducer.contacts);



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
                      ? "Главная"
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
            <div className="footer-elements-column">
              <h3 className="footer-transparent-title">-</h3>
              <ul>
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
              {contacts ? (
                <>
              <a className="contact-tel" href={`tel:${contacts.phone_number}`} >{contacts.phone_number}</a>
              <a className="contact-mail" href={`mailto:${contacts.email}`}>{contacts.email}</a>
</>) : ("Загрузка....")}
              <div className="footer-elements-contacts">
                <a href={contacts.instagram} target="_blank">
                  <img
                    className="footer-elements-contacts-web"
                    src={contacts.instagram_image}
                    alt="Instagram"
                  />
                </a>
                <a target="_blank" href={contacts.youtube}>
                  <img
                    className="footer-elements-contacts-web"
                    src={contacts.youtube_image}
                    alt="YouTube"
                  />
                </a>
                <a href={contacts.telegram} target="_blank">
                  <img
                    className="footer-elements-contacts-web"
                    src={contacts.telegram_image}
                    alt="Telegram"
                  />
                </a>
                <a href={contacts.linkedin} target="_blank">
                <img
                  className="footer-elements-contacts-web"
                  src={contacts.linkedin_image}
                  alt="LinkedIn"
                />
                </a>

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
                      ? "Главная"
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
              <ul >
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
              {contacts ? (
                <>
                <a className="contact-tel" href={`tel:${contacts.phone_number}`}>{contacts.phone_number}</a>
                <a className="contact-mail" href={`mailto:${contacts.email}`}>{contacts.email}</a>
</>) : ("Загрузка....")}
            </div>
            <div className="footer-element-column-mobile">
              <div className="footer-elements-contacts">
                <a href={contacts.instagram}>
                  <img
                    className="footer-elements-contacts-web"
                    src={contacts.instagram_image}
                    alt="Instagram"
                  />
                </a>
                <a target="_blank" href={contacts.youtube}>
                  <img
                    className="footer-elements-contacts-web"
                    src={contacts.youtube_image}
                    alt="YouTube"
                  />
                </a>
                <a href={contacts.telegram} target="_blank">
                  <img
                    className="footer-elements-contacts-web"
                    src={contacts.telegram_image}
                    alt="Telegram"
                  />
                </a>
                <a href={contacts.linkedin} target="_blank">
                  <img
                    className="footer-elements-contacts-web"
                    src={contacts.linkedin_image}
                    alt="Linkedin"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-mobile">
            <div className="footer-mobile-top">
              <img className="footer-elements-logo" src={logo} alt="Logo" />

            </div>
            <div className="footer-mobile-row">
            <div className="footer-element-column-mobile">
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
                      ? "Главная"
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
            <h3 className="footer-transparent-title">-</h3>
              <ul >
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
              {contacts ? (
                <>
                <a className="contact-tel" href={`tel:${contacts.phone_number}`}>{contacts.phone_number}</a>
                <a className="contact-mail" href={`mailto:${contacts.email}`}>{contacts.email}</a>
</>) : ("Загрузка....")}
            </div>
            <div className="footer-element-column-mobile">
              <div className="footer-elements-contacts">
                <a target="_blank" href={contacts.instagram}>
                  <img
                    className="footer-elements-contacts-web"
                    src={contacts.instagram_image}
                    alt="Instagram"
                  />
                </a>
                <a target="_blank" href={contacts.youtube}>
                  <img
                    className="footer-elements-contacts-web"
                    src={contacts.youtube_image}
                    alt="YouTube"
                  />
                </a>
                <a href={contacts.telegram} target="_blank">
                  <img
                    className="footer-elements-contacts-web"
                    src={contacts.telegram_image}
                    alt="Telegram"
                  />
                </a>
                <a href={contacts.linkedin} target="_blank">
                  <img
                    className="footer-elements-contacts-web"
                    src={contacts.linkedin_image}
                    alt="Linkedin"
                  />
                </a>
              </div>
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
            <a target="_blank" href="https://geeks.kg/geeks-pro">
              <img src={BYGEEKSPRO} alt="BY GEEKS PRO" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
