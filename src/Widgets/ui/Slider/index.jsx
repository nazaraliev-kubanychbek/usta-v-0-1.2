import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './styles/index.scss';
import { URL_API } from '../../../Futures/URLAPI';

const Index = () => {
  const lang = useSelector((state) => state.reducer.lang);
  
  const [title, setTitle] = useState("");
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${URL_API}api/v1/community/titel/`)
      .then((response) => {
        const titleData = response.data[0]; 
        if (titleData) {
          switch (lang) {
            case 'ru':
              setTitle(stripHTML(titleData.title_contacts_ru));
              break;
            case 'en':
              setTitle(stripHTML(titleData.title_contacts_en));
              break;
            default:
              setTitle(stripHTML(titleData.title_contacts_ky));
              break;
          }
        } else {
          setTitle("Заголовок не найден");
        }
      })
      .catch((err) => {
        console.error("Ошибка при загрузке заголовка:", err);
        setTitle("Ошибка загрузки заголовка");
      });

    axios.get(`${URL_API}api/v1/community/important-contacts/`)
      .then((response) => {
        setData(response.data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке контактов:", err);
        setError('Ошибка загрузки данных');
        setLoading(false);
      });
  }, [lang]);

  const stripHTML = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "";
  };

  const localizedDescription = (contact) => {
    switch (lang) {
      case 'ru':
        return stripHTML(contact.title_ru);
      case 'en':
        return stripHTML(contact.title_en);
      default:
        return stripHTML(contact.title_ky);
    }
  };

  if (loading) return <p>Загрузка данных...</p>;
  if (error) return <p>{error}</p>;

  if (!data || data.length === 0) {
    return <p>Контакты не найдены.</p>;
  }

  return (
    <div className="community-index">
      <div className="container">
        <h1 className="big-title">{title}</h1>

        <div className="row index-block">
          {data.map((contact, index) => (
            <div key={index} className="col-3 index-block-col">
              <img
                src={contact.image}
                alt={localizedDescription(contact)}
                className="index-block-logo"
              />
              <p className="index-block-text">{localizedDescription(contact)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
