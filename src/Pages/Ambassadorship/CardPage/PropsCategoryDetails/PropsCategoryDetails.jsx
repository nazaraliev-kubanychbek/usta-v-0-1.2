import Requisites from "../../Requisites/Requisites";
import "./PropsCategoryDetails.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL_API } from "../../../../Futures/URLAPI";
import { useSelector } from "react-redux";
import AmbassadorList from "../../AmbassadorList/AmbassadorList";

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
        className="props-banner"
        style={{
          backgroundImage: `url(${data.banner_image})`,
        }}
      >
        <div className="container">
        <div className="props-text-block">
          <h1 className="props-title"
          dangerouslySetInnerHTML={{__html:
            lang === 'ru'
            ? data.title
            : lang === 'en'
            ? data.title_en
            : data.title_ky
          }}
          ></h1>
          <p className="props-text"
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
      <Requisites data={data} />
      <div className="container">
      <AmbassadorList />
      </div>
    </div>
  );
}

export default PropsCategoryDetails;
