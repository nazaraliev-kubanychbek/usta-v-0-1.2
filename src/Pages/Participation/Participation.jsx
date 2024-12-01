import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Participation.scss';
import { useSelector } from 'react-redux';
import Slider from '../../Widgets/ui/Slider/Slider';
import { URL_API } from '../../Futures/URLAPI';
function Participation() {
  const [projects, setProjects] = useState(null);
  const [awards, setAwards] = useState(null);
  const [mentoringPrograms, setMentoringPrograms] = useState([]);
  const lang = useSelector((state) => state.reducer.lang);

  useEffect(() => {
    // Запросы к API
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
      <div className="Participation">
        <div className="container">
          <div className="Participation-texts">
            <div className="Participation-titles">
              <h1 className="Participation-text">
                {lang === 'ru' ? 'Участие в проектах' : lang === 'en' ? 'Participation in Projects' : 'Долбоорлорго катышуу'}
              </h1>
              <p className="Participation-title">
                {lang === 'ru'
                  ? '“USTA International” вдохновляет и направляет людей в сфере инженерии...'
                  : lang === 'en'
                  ? '“USTA International” inspires and guides people in the field of engineering...'
                  : '“USTA International” инженерия тармагында адамдарды шыктандырат...'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Particicpation-text-mobile">
      <h1 className="Participation-text">
                {lang === 'ru' ? 'Участие в проектах' : lang === 'en' ? 'Participation in Projects' : 'Долбоорлорго катышуу'}
              </h1>
              <p className="Participation-title">
                {lang === 'ru'
                  ? '“USTA International” вдохновляет и направляет людей в сфере инженерии...'
                  : lang === 'en'
                  ? '“USTA International” inspires and guides people in the field of engineering...'
                  : '“USTA International” инженерия тармагында адамдарды шыктандырат...'}
              </p>
      </div>
      <div className="container">
        {/* Секция проектов */}
        <div className="Participation-row-box">
          <div className="row">
            {Array.isArray(projects) && projects.length > 0 ? (
              projects.map((project, index) => (
                <div className="col-6" key={project.id}>
                  <div className="Participation-project-card">
                    <img className="Participation-img" src={project.image} alt={project.title} />
                    <h3 className="Participation-project-card-title">
                      {lang === 'ru'
                        ? project.title
                        : lang === 'en'
                        ? project.title_en
                        : project.title_ky}
                    </h3>
                    <p className="Participation-project-card-text">
                      {lang === 'ru'
                        ? project.description
                        : lang === 'en'
                        ? project.description_en
                        : project.description_ky}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>Загрузка проектов...</p>
            )}
          </div>
        </div>

        {/* Секция наград */}
        <div className="Participation-gap">
          <h3 className="Participation-gap-text">
            {lang === 'ru' ? 'Награды за достижения' : lang === 'en' ? 'Awards for  ' : 'Ийгиликтер үчүн сыйлыктар'}
          </h3>
          <div className="Participation-awards">
            {Array.isArray(awards) && awards.length > 0 ? (
              <Slider url={`api/v1/projects/awards/`  } list={[]}  />
            ) : (
              <p>Загрузка наград...</p>
            )}
          </div>
        </div>

        {/* Секция программ наставничества */}
        <div className="Participation-program">
          <h1 className="Participation-program-text-h3">
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
                      <img src={program.image} alt={program.title} className="img1" />

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
                      <img src={program.image} alt={program.title} className="img1 img1-mobile" />


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
                      <img src={program.image} alt={program.title} className="img1 img2-by-partipication" />
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
      </div>
    // </div>
  );
}

export default Participation;
