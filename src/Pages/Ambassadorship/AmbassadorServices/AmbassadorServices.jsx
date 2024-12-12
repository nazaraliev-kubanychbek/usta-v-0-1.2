import './AmbassadorServices.scss';
import plusIcon from "./icons/plus-icon.svg";
import minusIcon from "./icons/minus-icon.svg";
import arrow from "./icons/arrow.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL_API } from "../../../Futures/URLAPI";
import { useSelector } from "react-redux";

const AmbassadorServices = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [serviceList, setServiceList] = useState([]);
    const lang = useSelector((s) => s.reducer.lang);

    useEffect(() => {

      axios(`${URL_API}api/v1/ambassadorship/usta-service-content/`).then(
        ({ data }) => setServiceList(data)
      );
    }, []);
    return (

        <div className="container">
          <div className="service-detail-menu">
            {serviceList.map((item) => {
              return (
                <div className="service-detail-menu-item" key={item.id}>
                  <div
                    className="service-detail-menu-item-row"
                    onClick={() => {
                      if (item.id === showMenu) {
                        setShowMenu(false);
                      } else {
                        setShowMenu(item.id);
                      }
                    }}
                  >
                    <div className="service-detail-menu-item-left">
                      <div className="service-detail-menu-item-left-icon-block">
                        <img
                          src={plusIcon}
                          alt=""
                          className={
                            showMenu === item.id
                              ? "service-detail-menu-item-left-icon"
                              : "service-detail-menu-item-left-icon service-detail-menu-item-left-icon-show"
                          }
                        />
                        <img
                          src={minusIcon}
                          alt=""
                          className={
                            showMenu === item.id
                              ? "service-detail-menu-item-left-icon service-detail-menu-item-left-icon-show"
                              : "service-detail-menu-item-left-icon"
                          }
                        />
                      </div>

                      <p className="service-detail-menu-item-left-text"
                      dangerouslySetInnerHTML={{__html:
                        lang === 'ru'
                        ? item.title
                        : lang === 'en'
                        ? item.title_en
                        : item.title_ky
                      }}
                      ></p>
                    </div>
                    {/* <img
                      src={arrow}
                      alt=""
                      className={
                        showMenu === item.id
                          ? "service-detail-menu-item-open-arrow service-detail-menu-item-open-arrow-reverse"
                          : "service-detail-menu-item-open-arrow"
                      }
                    /> */}
                  </div>

                  <p
                    className={
                      showMenu === item.id
                        ? "service-detail-menu-item-text service-detail-menu-item-text-show"
                        : "service-detail-menu-item-text"
                    }
                    dangerouslySetInnerHTML={{__html:
                        lang === 'ru'
                        ? item.description
                        : lang === 'en'
                        ? item.description_en
                        : item.description_ky
                      }}
                  ></p>
                </div>
              );
            })}
          </div>
        </div>
    );
}

export default AmbassadorServices;
