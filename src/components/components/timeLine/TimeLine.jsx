import React, { useEffect } from 'react'
import './TimeLine.css'
import Work from '@mui/icons-material/HomeRepairService';

import { VerticalTimeline } from 'react-vertical-timeline-component'
import SalesianosIcon from "../../../assets/Salesianos.jpeg"
import AtosIcon from "../../../assets/Atos.jpg"
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '../../theme/ThemeContext';
import TimelineElement from './TimeLineElement';
import { Constants } from '../../../utils/Constants';
import { useLanguage } from '../../../contexts/LanguageContext';

const TimeLine = () => {
  const { language, resources } = useLanguage();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(localStorage.getItem("selectedTheme") === "dark");
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document, { subtree: true, childList: true });

    return () => observer.disconnect();
  }, [setTheme]);

  return (
    <div className='general-container'>
      <div className='experience-title-timeline'>
        <Work fontSize="large" sx={{ color: 'var(--secundary-color)' }} />
        <h2 className='title-h2'>{resources[language]?.translation?.experienceLong}</h2>
      </div>
      <VerticalTimeline lineColor={theme ? 'white' : 'black'}>
        <TimelineElement
          title={resources[language]?.translation?.t1}
          description={resources[language]?.translation?.descriptions.d1}
          date={resources[language]?.translation?.dates.date1}
          iconUrl={AtosIcon}
          iconOnClick={() => { window.open(Constants.LINKS.atos) }}
          keywords={['FULL_STACK', 'MICROERVICIOS_SPRING_BOOT', 'ANGULAR_REACT', 'DOCKER', 'KUBERNETES']}
        />

        <TimelineElement
          title={resources[language]?.translation?.t2}
          description={resources[language]?.translation?.descriptions.d2}
          date={resources[language]?.translation?.dates.date2}
          iconUrl={AtosIcon}
          iconOnClick={() => { window.open(Constants.LINKS.atos) }}
          keywords={['FULL_STACK', 'ANGULAR', 'SPRING_BOOT', 'JPA', 'TRABAJO_EN_EQUIPO']}
        />

        <TimelineElement
          title={resources[language]?.translation?.t3}
          description={resources[language]?.translation?.descriptions.d3}
          date={resources[language]?.translation?.dates.date3}
          iconUrl={SalesianosIcon}
          iconOnClick={() => { window.open(Constants.LINKS.salesianos) }}
          keywords={['JAVA', 'SCRIPT', 'REACT', 'SPRING_BOOT', 'BASES_DE_DATOS_SQL', 'JPA', 'ARQUITECTURA_SOFTWARE', 'PATRONES_DE_DISENO', 'METODOLOGIAS_AGILES']}
        />
      </VerticalTimeline>
    </div>
  )
}

export default TimeLine