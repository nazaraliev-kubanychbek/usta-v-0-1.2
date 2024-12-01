import { Link } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { URL_API } from "../../../Futures/URLAPI";
import axios from "axios";
import '../Ambassadorship.scss';
import { setSelectedCategory } from "../../../Futures/reducers/reducer";

const AmbassadorList = ({id}) => {
    const lang = useSelector((s) => s.reducer.lang);
    const selectedCategory = useSelector(s => s.reducer.selectedCategory)
    const [ambassadorList, setAmbassadorList] = useState([]);
    const dispatch = useDispatch()

    useLayoutEffect(()=>{
        if( window.location.pathname === '/ambassadorship') dispatch(setSelectedCategory('all'))
    }, []);
    useEffect(() => {

            axios(
                selectedCategory === 'all'
                ? `${URL_API}api/v1/ambassadorship/ambassadors/`
                : `${URL_API}api/v1/ambassadorship/${selectedCategory}/`
              ).then(({ data }) =>{
                    if(id){
                        setAmbassadorList(data.filter(item => item.id != id))
                    } else{
                        setAmbassadorList(data)
                    }

              });
      }, [selectedCategory, id]);
    return (
        <div>
    {ambassadorList.map((item) => {
          return (
            <Link style={{textDecoration: 'none'}} key={item.id} to={`/ambassadorship/company/${item.id}`}>
               <div className="ambassadorship-card">
              <img
                src={item.banner_image}
                alt=""
                className="ambassadorship-card-img"
              />
              <div className="ambassadorship-card-block">
                <h3
                  className="ambassadorship-card-title"
                  dangerouslySetInnerHTML={{
                    __html:
                      lang === "ru"
                        ? item.title
                        : lang === "en"
                        ? item.title_en
                        : item.title_ky,
                  }}
                ></h3>
                <p className="ambassadorship-card-text">
                  {item.actual_address}
                </p>
                <p className="ambassadorship-card-text">
                  {lang === "ru"
                    ? item.inn_text
                    : lang === "en"
                    ? item.inn_text_en
                    : item.inn_text_ky}
                    :
                  {item.inn}
                </p>
                <p className="ambassadorship-card-text">
                {lang === "ru"
                    ? item.kpp_text
                    : lang === "en"
                    ? item.kpp_text_en
                    : item.kpp_text_ky}
                    :
                    {
                      item.kpp
                    }
                </p>
              </div>
            </div>
            </Link>

          );
        })}
        </div>
    );
}

export default AmbassadorList;
