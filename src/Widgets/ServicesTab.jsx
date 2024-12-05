import { useEffect, useState } from "react";
import axios from 'axios';
import { URL_API } from '../Futures/URLAPI';
import { useSelector } from 'react-redux';

const ServiceTab = ({ URL }) => {
    const lang = useSelector(s => s.reducer.lang);
    const [blocksData, setBlocksData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${URL_API}${URL}`)
            .then((response) => {
                setBlocksData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError('Произошла ошибка при загрузке данных');
            });
    }, []);

    useEffect(() => {
        if (blocksData.length) {
            console.log(blocksData);
        }
    }, [blocksData]);

    if (error) return <p>Ошибка: {error}</p>;

    return (
        <div>
            <div className="container">
                <div className="Service">
                    <h1>{lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Кызматтар"}</h1>
                    <div className="Service-list">
                        {blocksData.map((block, index) => (

                            <div key={index} className="Service-list-service">
                                <img src={block.image} />
                                <p dangerouslySetInnerHTML={{
                                    __html: lang === "ru"
                                    ? block.title_ru
                                    : lang === "en"
                                    ? block.title_en
                                     : block.title_ky
                                }}></p>
                            </div>


                        ))}
                    </div>
                </div>
            </div>
        </div>



    );
};

export default ServiceTab;
