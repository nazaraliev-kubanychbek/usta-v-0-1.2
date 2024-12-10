import "./Contacts.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

import { URL_API } from "../../Futures/URLAPI";

function Contacts() {
  const lang = useSelector((s) => s.reducer.lang);
  const contacts = useSelector(s => s.reducer.contacts);
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
        <div className="Contact-list-label section-title"
        dangerouslySetInnerHTML={{
          __html : lang === 'ru'
          ? contacts.title
          : lang === 'en'
          ? contacts.title_en
          : contacts.title_ky
        }}
        ></div>
        <div className="Contact-list">
          <div className="Contact-list-block">
            <div className="Contact-list-block__img">
              <img src={contacts.email_image} />
            </div>

            <div className="Contact-list-block__text">
              <a
              style={{
                color: '#000',
                textDecoration: 'none'
              }}
              href={`mailto: ${contacts.email}`}>{contacts.email}</a>
            </div>
          </div>
          <div className="Contact-list-block">
            <div className="Contact-list-block__img">
              <img src={contacts.phone_number_image} />
            </div>

            <div className="Contact-list-block__text">
              <a href={`tel: ${contacts.phone_number}`}
              style={{
                color: '#000',
                textDecoration: 'none'
              }}
              >{contacts.phone_number}</a>
            </div>
          </div>
          <div className="Contact-list-block">
            <div className="Contact-list-block__img">
              <img src={contacts.address_image} />
            </div>

            <div
              className="Contact-list-block__text"
           
            >{contacts.address}</div>
          </div>
        </div>
      </div>
      </section>

    </div>
  );
}

export default Contacts;
