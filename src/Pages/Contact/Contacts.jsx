import "./Contacts.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

import { URL_API } from "../../Futures/URLAPI";

function Contacts() {
  const lang = useSelector((s) => s.reducer.lang);
  const [mail, setMail] = useState([]);
  const [banner, setBanner] = useState([]);
  const [address, setAddress] = useState([]);
  const [error, setError] = useState([]);
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL_API}api/v1/contacts/contacts-banner/`)
      .then((response) => {
        setBanner(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => {
        setError("Произошла ошибка при загрузке данных");
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${URL_API}api/v1/contacts/emails/`)
      .then((response) => {
        setMail(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => {
        setError("Произошла ошибка при загрузке данных");
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${URL_API}api/v1/contacts/contacts/`)
      .then((response) => {
        setPhone(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => {
        setError("Произошла ошибка при загрузке данных");
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${URL_API}api/v1/contacts/addresses/`)
      .then((response) => {
        setAddress(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => {
        setError("Произошла ошибка при загрузке данных");
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="Contact">
      <div >
        <div
          className="page-banner Contact-banner"
          style={{ backgroundImage: `url(${banner.banner})` }}
        >
         <div className="container">
         <div className="page-main-text-block Contact-banner-text-block">
          <h1
            className="page-title"
            dangerouslySetInnerHTML={{
              __html:
                lang === "ru"
                  ? banner.title
                  : lang === "en"
                  ? banner.title_en
                  : banner.title_ky,
            }}
          ></h1>
          </div>
         </div>

        </div>
      </div>
      <section className="section">
      <div className="container">
        <div className="Contact-list-label section-title">{lang === "ru" ? "КАК СВЯЗАТЬСЯ С НАМИ?" : lang === "en" ? "HOW TO CONTACT US?" : "БИЗ МЕНЕН КАНТИП БАЙЛАНЫШСА БОЛОТ?" }</div>
        <div className="Contact-list">
          <div className="Contact-list-block">
            <div className="Contact-list-block__img">
              <img src={mail.icon} />
            </div>

            <div className="Contact-list-block__text">
              <a
              style={{
                color: '#000',
                textDecoration: 'none'
              }}
              href={`mailto: ${mail.email}`}>{mail.email}</a>
            </div>
          </div>
          <div className="Contact-list-block">
            <div className="Contact-list-block__img">
              <img src={phone.icon} />
            </div>

            <div className="Contact-list-block__text" dangerouslySetInnerHTML={{__html: phone.phone_number}}></div>
          </div>
          <div className="Contact-list-block">
            <div className="Contact-list-block__img">
              <img src={address.icon} />
            </div>

            <div
              className="Contact-list-block__text"
              dangerouslySetInnerHTML={{
                __html:
                  lang === "ru"
                    ? address.address
                    : lang === "en"
                    ? address.address_en
                    : address.address_ky,
              }}
            ></div>
          </div>
        </div>
      </div>
      </section>

    </div>
  );
}

export default Contacts;
