import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./styles/index.scss";
import { URL_API } from "../../../Futures/URLAPI";
import Modal from "./Modal";

const stripHTML = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
};

const localizedDescription = (contact, lang) => {
  const titles = {
    ru: contact.title_ru,
    en: contact.title_en,
    ky: contact.title_ky,
  };
  return stripHTML(titles[lang] || titles.ky);
};

const Index = () => {
  const lang = useSelector((state) => state.reducer.lang);
  const [title, setTitle] = useState("Загрузка...");
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [modal, setModal] = useState(false);
  const toggleModal = (id) => {
    setModal(!modal);
    setId(id);
  };

  useEffect(() => {
    Promise.all([
      axios.get(`${URL_API}api/v1/community/title/`),
      axios.get(`${URL_API}api/v1/community/important-contacts/`),
    ])
      .then(([titleResponse, contactsResponse]) => {
        const titleData = titleResponse.data[0];

        // Проверяем наличие нужного поля для выбранного языка, если нет — пробуем fallback на русский
        if (titleData) {
          const titleKey = `title_contacts_${lang}`;
          setTitle(
            titleData[titleKey]
              ? stripHTML(titleData[titleKey])
              : stripHTML(titleData.title_contacts_ky) // Fallback на русский язык
          );
        } else {
          setTitle("Заголовок не найден");
        }

        setData(contactsResponse.data || []);
      })
      .catch(() => {
        setTitle("Ошибка загрузки данных");
        setData([]);
      });
  }, [lang]);

  return (
    <div className="community-index">
      <div className="container">
        <h1 className="big-title">{title}</h1>
        <div className="row index-block">
          {data.length > 0 ? (
            data.map((contact, index) => (
              <div
                key={contact.id}
                className="col-3 index-block-col"
                onClick={() => toggleModal(contact.id)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={contact.image}
                  alt={localizedDescription(contact, lang)}
                  className="index-block-logo"
                />
                <p className="index-block-text">
                  {localizedDescription(contact, lang)}
                </p>
              </div>
            ))
          ) : (
            <p>Контакты не найдены.</p>
          )}
        </div>
        {
          modal
          ? <Modal toggleModal={toggleModal} id={id} modal={modal} />
          : ''
        }

      </div>
    </div>
  );
};

export default Index;
