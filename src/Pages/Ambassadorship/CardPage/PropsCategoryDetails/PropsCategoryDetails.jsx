import Requisites from "../../Requisites/Requisites";
import "./PropsCategoryDetails.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL_API } from "../../../../Futures/URLAPI";
import { useSelector } from "react-redux";
import AmbassadorList from "../../AmbassadorList/AmbassadorList";
import CategoryBlock from './../../CategoryBlock/CategoryBlock';

function PropsCategoryDetails() {
  const [data, setData] = useState({});
  const lang = useSelector((s) => s.reducer.lang);

  useEffect(() => {
    axios(`${URL_API}api/v1/ambassadorship/props/`).then(({ data }) =>
      setData(data[0])
    );
  }, []);
  return (
    <div className="props">
      <div
        className="page-banner"
        style={{
          backgroundImage: `url(${data.banner_image})`,
        }}
      >
        <div className="container">
        <div className="page-main-text-block">
          <h1 className="page-title"
          dangerouslySetInnerHTML={{__html:
            lang === 'ru'
            ? data.title
            : lang === 'en'
            ? data.title_en
            : data.title_ky
          }}
          ></h1>
          <p className="page-description"
           dangerouslySetInnerHTML={{__html:
            lang === 'ru'
            ? data.banner_description
            : lang === 'en'
            ? data.banner_description_en
            : data.banner_description_ky
          }}
          ></p>
        </div>
        </div>


      </div>

      <div className="container">
        <div className="page-main-text-block-mobile">
          <h1 className="page-title-mobile"
          dangerouslySetInnerHTML={{__html:
            lang === 'ru'
            ? data.title
            : lang === 'en'
            ? data.title_en
            : data.title_ky
          }}
          ></h1>
          <p className="page-description-mobile"
           dangerouslySetInnerHTML={{__html:
            lang === 'ru'
            ? data.banner_description
            : lang === 'en'
            ? data.banner_description_en
            : data.banner_description_ky
          }}
          ></p>
        </div>
        </div>

          <section className="section">
           <div className="container">
           <CategoryBlock />
           </div>
          </section>

          <section className="section">
          <Requisites data={data} />
          </section>


      <div className="container">
      <AmbassadorList />
      </div>
    </div>
  );
}

export default PropsCategoryDetails;
