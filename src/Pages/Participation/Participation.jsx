import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Participation.scss';
import { useSelector } from 'react-redux';
import Slider from '../../Widgets/ui/Slider/Slider';
import { URL_API } from '../../Futures/URLAPI';
import { Link } from 'react-router-dom';

function Participation() {
  const [projects, setProjects] = useState(null);
  const [awards, setAwards] = useState(null);
  const [mentoringPrograms, setMentoringPrograms] = useState([]);
  const lang = useSelector((state) => state.reducer.lang);
  const [textData, setTextData] = useState({});


  useEffect(() => {
    // Запросы к API
    axios( URL_API + 'api/v1/projects/project-participation/')
    .then(({data}) => setTextData(data[0]))
    axios
      .get('https://new-usta.webtm.ru/api/v1/projects/projects/')

      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error fetching projects:', error));

    axios
      .get('https://new-usta.webtm.ru/api/v1/projects/projects/')
      .then((response) => setAwards(response.data))
      .catch((error) => console.error('Error fetching awards:', error));

    axios
      .get('https://new-usta.webtm.ru/api/v1/projects/mentoring-programs/')
      .then((response) => {
        console.log(response.data);
        setMentoringPrograms(response.data)})
      .catch((error) => console.error('Error fetching mentoring programs:', error));
  }, []);

  return (
    <div className="Participation-container">
      <div className="page-banner"
      style={{
        backgroundImage: `url(${textData.banner})`
      }}
      >
        <div className="container">
            <div className="page-main-text-block">
              <h1 className="page-title">
                {
                lang === 'ru'
                ? textData.title
                : lang === 'en'
                ? textData.title_en
                 : textData.title_ky
                 }
              </h1>
              <p className="page-description">
                { lang === 'ru'
                ? textData.description
                : lang === 'en'
                ? textData.description_en
                 : textData.description_ky}
              </p>
            </div>

        </div>
      </div>

      <div className="container">
            <div className="page-main-text-block-mobile">
              <h1 className="page-title-mobile">
                {
                lang === 'ru'
                ? textData.title
                : lang === 'en'
                ? textData.title_en
                 : textData.title_ky
                 }
              </h1>
              <p className="page-description-mobile">
                { lang === 'ru'
                ? textData.description
                : lang === 'en'
                ? textData.description_en
                 : textData.description_ky}
              </p>
            </div>

        </div>
      <div className="container">


        {/* Секция проектов */}
         <section className='section'>
         <div className="Participation-row-box">
          <div className="row">
            {Array.isArray(projects) && projects.length > 0 ? (
              projects.map((project, index) => {
                let title = lang === 'ru'
                ? project.title
                : lang === 'en'
                ? project.title_en
                : project.title_ky;
                let description = lang === 'ru'
                ? project.description
                : lang === 'en'
                ? project.description_en
                : project.description_ky;
              return <div className="col-6" key={project.id}>
                  <Link to={`/participation/project/${project.id}`}>
                  <div className="Participation-project-card">
                    <img className="Participation-img" src={project.image} alt={project.title} />
                    <h3 className="Participation-project-card-title">
                      {title.length > 20
                      ? title.substr(0, 17).trim() + '...'
                      : title
                      }
                    </h3>
                    <p className="Participation-project-card-text">
                    {description.length > 35
                      ? description.substr(0, 32).trim() + '...'
                      : description
                      }
                    </p>
                  </div>
                  </Link>
                </div>
})
            ) : (
              <p>Загрузка проектов...</p>
            )}
          </div>
        </div>
         </section>

        {/* Секция наград */}
        <section className='section'>
          <div className="container">
          <h3 className="Participation-gap-text section-title">
            {lang === 'ru' ? 'Награды за достижения' : lang === 'en' ? 'Awards for  ' : 'Ийгиликтер үчүн сыйлыктар'}
          </h3>
          </div>
        <div className="Participation-gap">

          <div className="Participation-awards">
            {Array.isArray(awards) && awards.length > 0 ? (
              <Slider url={`api/v1/projects/awards/`  } detail={true} detailUrl='/participation/awards' />
            ) : (
              <p>Загрузка наград...</p>
            )}
          </div>
        </div>
        </section>


        {/* Секция программ наставничества */}
        <section className='section'>
        <div className="Participation-program">
          <h1 className="Participation-program-text-h3 section-title">
            {lang === 'ru'
              ? 'Программы наставничества'
              : lang === 'en'
              ? 'Mentoring Programs'
              : 'Тарбиялык программалар'}
          </h1>
          <div className="Participation-program-con">
            {Array.isArray(mentoringPrograms) && mentoringPrograms.length > 0 ? (
              mentoringPrograms.map((program, index) => (
                <div className="row" key={program.id}>
                  {index % 2 === 0 ? (
                    <>

                      <div className="col-6">
                      <img src={program.image} alt={program.title} className="Participation-program-img1" />

                      </div>

                      <div className="col-6">
 <h3 className="Participation-program-text">
                          {lang === 'ru'
                            ? program.title
                            : lang === 'en'
                            ? program.title_en
                            : program.title_ky}
                        </h3>
                        <p className="Participation-program-title">
                          {lang === 'ru'
                            ? program.description
                            : lang === 'en'
                            ? program.description_en
                            : program.description_ky}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-6">
                      <img src={program.image} alt={program.title} className="Participation-program-img1 img1-mobile" />


                        <h3 className="Participation-program-text Participation-program-text2">
                          {lang === 'ru'
                            ? program.title
                            : lang === 'en'
                            ? program.title_en
                            : program.title_ky}
                        </h3>
                        <p className="Participation-program-title Participation-program-title2">
                          {lang === 'ru'
                            ? program.description
                            : lang === 'en'
                            ? program.description_en
                            : program.description_ky}
                        </p>
                      </div>
                      <div className="col-6">
                      <img src={program.image} alt={program.title} className="Participation-program-img1 img2-by-partipication" />
                      <h3 className="Participation-program-text Participation-program-text-mobile">
                          {lang === 'ru'
                            ? program.title
                            : lang === 'en'
                            ? program.title_en
                            : program.title_ky}
                        </h3>
                        <p className="Participation-program-title Participation-program-title-mobile">
                          {lang === 'ru'
                            ? program.description
                            : lang === 'en'
                            ? program.description_en
                            : program.description_ky}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))
            ) : (
              <p>Загрузка программ наставничества...</p>
            )}
          </div>
        </div>
        </section>


      </div>
     </div>
  );
}

export default Participation;
