import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './Community.scss';
import Index from './ui/index';
import { URL_API } from '../../Futures/URLAPI';
import PartnerSlider from '../../Widgets/ui/PartnerSlider/PartnerSlider';
import Slider from '../../Widgets/ui/Slider/Slider';

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
      .get(`${URL_API}api/v1/community/banner/`)
      .then((response) => setCommunityData(response.data[0]))
      .catch(() => setCommunityData(null));
  }, []);

  if (!communityData) {
    return <p>Ошибка загрузки данных или данные отсутствуют</p>;
  }

  return (
    <div className="community">
      <div
        className="page-banner"
        style={{ backgroundImage: `url(${communityData.photo})` }}
      >
        <div className="container">
          <div className="page-main-text-block">
            <h1 className=" page-title">
              {getLocalizedText(communityData, lang, "title")}
            </h1>
            <p className=" page-description">
              {getLocalizedText(communityData, lang, "description")}
            </p>
          </div>
        </div>
      </div>

    <div className="container">
    <div className="page-main-text-block-mobile">
            <h1 className=" page-title-mobile">
              {getLocalizedText(communityData, lang, "title")}
            </h1>
            <p className=" page-description-mobile">
              {getLocalizedText(communityData, lang, "description")}
            </p>
          </div>
    </div>

      <div className="container">
        <section className='section'>
        <Slider url='api/v1/community/image-info/' detail={true} detailUrl='/community/slider_1' />
        </section>
        <section className='section'>
        <Slider url='api/v1/community/image-info-2/' detail={true} detailUrl='/community/slider_2' />
        </section>
        <section className='section'>
        <PartnerSlider />
        </section>
        <section className='section'>
        <Index />
        </section>

      </div>
    </div>
  );
}

export default Community;
