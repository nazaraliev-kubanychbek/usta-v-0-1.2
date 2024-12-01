import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './styles/index.scss';
import { URL_API } from '../../../Futures/URLAPI';

const stripHTML = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, 'text/html');
  return doc.body.textContent || "";
};

const localizedDescription = (contact, lang) => {
  const titles = {
    ru: contact.title_ru,
    en: contact.title_en,
    ky: contact.title_ky,
  };
  return stripHTML(titles[lang] || titles.ky); // Возвращаем title для выбранного языка или для ky как fallback
};

const Index = () => {
  const lang = useSelector((state) => state.reducer.lang);
  const [title, setTitle] = useState("Загрузка...");
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`${URL_API}api/v1/community/titel/`),
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
              <div key={index} className="col-3 index-block-col">
                <img
                  src={contact.image}
                  alt={localizedDescription(contact, lang)}
                  className="index-block-logo"
                />
                <p className="index-block-text">{localizedDescription(contact, lang)}</p>
              </div>
            ))
          ) : (
            <p>Контакты не найдены.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
