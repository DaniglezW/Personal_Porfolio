import React from 'react'
import './AboutMe.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AboutMeImg from '../../../assets/AboutMe.jpg'
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='container-about-me'>
      <div className='experience-title'>
        <PersonOutlineIcon fontSize="large" sx={{ color: 'var(--secundary-color)' }} />
        <h2 className='title-h2'>{t("aboutMe")}</h2>
      </div>
      <div className="about-content">
        <div className="text-about-me">
          {
            i18n.language === 'es'
              ? <>
                <h2>¡Hola! 👋</h2>
                <p>
                  Me llamo Daniel González y soy de Tenerife, España. Me apasiona el&nbsp;
                  <span className="highlight">desarrollo de software</span> y siempre estoy
                  buscando aprender y mejorar mis habilidades. Desde que comencé en este mundo,
                  me he interesado en construir&nbsp;
                  <span className="highlight">aplicaciones eficientes y modernas</span>.
                </p>
                <p>
                  Me especializo en <span className="highlight">desarrollo Full Stack</span>,
                  trabajando tanto en el backend como en el frontend. Me gusta optimizar código,
                  aplicar buenas prácticas y enfrentar nuevos desafíos para seguir creciendo
                  como desarrollador.
                </p>
                <p>
                  También disfruto <span className="highlight">trabajar en equipo</span>, compartir conocimientos y colaborar con
                  otros profesionales para crear soluciones de calidad. Creo que un buen ambiente
                  de trabajo y la comunicación son claves para lograr grandes resultados.
                </p>
              </>
              : <>
                <h2>Hello! 👋</h2>
                <p>
                  My name is Daniel González, and I'm from Tenerife, Spain. I'm passionate about
                  <span className="highlight">software development</span> and always looking to learn and improve my skills.
                  Since I started in this field, I've been interested in building
                  <span className="highlight">efficient and modern applications</span>.
                </p>
                <p>
                  I specialize in <span className="highlight">Full Stack development</span>, working on both the backend and frontend.
                  I enjoy optimizing code, applying best practices, and facing new challenges to continue growing as a developer.
                </p>
                <p>
                  I also enjoy <span className="highlight">working in teams</span>, sharing knowledge, and collaborating with other professionals to create high-quality solutions.
                  I believe that a good work environment and communication are key to achieving great results.
                </p>
              </>
          }

        </div>

        <div className="img-about-me">
          <img src={AboutMeImg} alt="About me" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe