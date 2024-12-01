import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import Partners from '../../Shared/Components/Partners/Partners';
import Slider from './ui/Slider';
import './Community.scss';
import Index from './ui/index';
import { URL_API } from '../../Futures/URLAPI'

const stripHTML = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, 'text/html');
  return doc.body.textContent || "";
};

const getLocalizedText = (data, lang, key) => {
  const localizedKey = `${key}_${lang}`;
  return stripHTML(data?.[localizedKey] || data?.[`${key}_ky`] || "");
};

function Community() {
  const lang = useSelector((state) => state.reducer.lang);
  const [communityData, setCommunityData] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL_API}api/v1/community/community/`)
      .then((response) => setCommunityData(response.data[0]))
      .catch(() => setCommunityData(null));
  }, []);

  if (!communityData) {
    return <p>Ошибка загрузки данных или данные отсутствуют</p>;
  }

  return (
    <div className="community">
      <div
        className="banner"
        style={{ backgroundImage: `url(${communityData.photo})` }}
      >
        <div className="container">
          <div className="content-head">
            <h1 className="content-head-h1">
              {getLocalizedText(communityData, lang, "title")}
            </h1>
            <p className="content-head-p">
              {getLocalizedText(communityData, lang, "description")}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <Slider />
        <Slider />
        <Partners />
        <Index />
      </div>
    </div>
  );
}

export default Community;
