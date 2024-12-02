import { useEffect, useState } from "react";
import axios from 'axios';
import { URL_API } from '../../../Futures/URLAPI';
import { BigBlock } from "../CardEvent";
import { useSelector } from 'react-redux';

const BigBlocks = ({ URL }) => {
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
            {blocksData.map((block, index) => (
                <BigBlock
                    key={block.id}
                    //head={block.title}
                    p={lang === "ru" ? block.description_ru : lang === "en" ? block.description_en : block.description_ky}
                    subhead={lang === "ru" ? block.title_ru : lang === "en" ? block.title_en : block.title_ky}
                    btn="true"
                    URL={block.url_button}
                    img1={block.sections[0]?.image}
                    img2={block.sections[1]?.image}
                    img3={block.sections[2]?.image}
                    img4={block.sections[3]?.image}
                    reversed={index % 2 === 1 ? "true" : "false"}
                />
            ))}
        </div>
    );
};

export default BigBlocks;
