import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL_API } from "../../../Futures/URLAPI";
import { useSelector } from "react-redux";

// const localizedDescription = (contact, lang) => {
//   const titles = {
//     ru: contact.title_ru,
//     en: contact.title_en,
//     ky: contact.title_ky,
//   };
//   return stripHTML(titles[lang] || titles.ky);
// };

const Modal = ({ toggleModal, modal, id }) => {
  const lang = useSelector((state) => state.reducer.lang);
  const { 0: data, 1: setData } = useState({});
  useEffect(() => {
    axios
    .get(`${URL_API}api/v1/community/important-contacts/${id}/`)
    .then(({ data }) => setData(data))
    .catch((e) => console.error(e));
  }, [id]);

  return (
    <div
      className={modal ? "modal modal__active" : "modal"}
      onClick={toggleModal}
    >
      <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
        <h5 className="modal__dialog-title"
        dangerouslySetInnerHTML={{
          __html:
           lang === 'ru'
          ? data.title
          : lang === 'en'
          ? data.title_en
          : data.title_ky
        }}
        ></h5>
        <ul className="modal__dialog-list">
          <li>
            <img src={data.full_name_image} alt="" />
            <p  dangerouslySetInnerHTML={{
          __html:
           lang === 'ru'
          ? data.full_name
          : lang === 'en'
          ? data.full_name_en
          : data.full_name_ky
        }}></p>
          </li>
          <li>
            <img src={data.phone_number_image} alt="" />
            <a style={{
              textDecoration: 'none',
              color: '#000'
            }} href={`tel: ${data.phone_number}`}>{data.phone_number}</a>
          </li>
          <li>
            <img src={data.email_image} alt="" />
            <a style={{
              textDecoration: 'none',
              color: '#000'
            }} href={`mailto: ${data.email}`}>{data.email}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
