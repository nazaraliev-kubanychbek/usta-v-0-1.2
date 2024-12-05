import './DetailPage.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { URL_API } from '../../Futures/URLAPI';
import axios from 'axios';

const DetailPage = ({url = '', date='', imageList=false}) => {
    const lang = useSelector(s => s.reducer.lang);
    const params = useParams();
    const [data, setData] = useState({});

    useEffect(()=>{
        axios(`${URL_API}${url}/${params.id}/`)
        .then(({data})=> setData(data))
    }, [])
    return (
        <div className='detail-page'
        style={{
            minHeight: '100vh'
        }}
        >
           {
            JSON.stringify(data) === '{}'
            ? ''
            :  <section className="section">
                {
                    date ?
                    <div className="container">
                        <div className="detail-page-row">
                    <h2 className='section-title'
                    dangerouslySetInnerHTML={{
                        __html: lang === 'ru'
                        ? data.title
                        : lang === 'en'
                        ? data.title_en
                        : data.title_ky
                    }}
                    ></h2>

                    <p className="detail-page-row-date">{data.date}</p>
                    </div>
                    </div>
                    : ''
                }

            <div className="container">

                <div className="row">
                    <div className="col-6">
                        {
                            imageList
                            ? <img src={data.sections[0].image} alt="" className="detail-page-img" />
                            : <img src={data.image || data.photo || data.banner} alt="" className="detail-page-img" />
                        }

                    </div>
                    <div className="col-6">
                        <h2 className="section-title" dangerouslySetInnerHTML={{__html:
                             lang === 'ru'
                             ? (data.title || data.full_name)
                             : lang === 'en'
                             ? (data.title_en || data.full_name_en)
                             : (data.title_ky || data.full_name_ky)
                }}></h2>
                <br />
                    <p className="project-detail-page-text" dangerouslySetInnerHTML={{__html:

                            lang === 'ru'
                            ? (data.description || data.position)
                            : lang === 'en'
                            ? (data.description_en || data.position_en)
                            : (data.description_ky || data.position_ky)

                    }}></p>
                    </div>
                </div>
                <br />
               {
                imageList
                ?  <div className="row">
                {
                    data.sections.map(item =>{
                        return <div className="col-3">
                            <img key={item.id} src={item.image} alt="" className="detail-page-img" />
                        </div>
                    })
                }
            </div>
            : ''
               }
            </div>
        </section>
           }

        </div>
    );
}

export default DetailPage;
