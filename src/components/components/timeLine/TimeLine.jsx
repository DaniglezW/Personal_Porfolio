import React, { useEffect } from 'react'
import './TimeLine.css'
import Work from '@mui/icons-material/HomeRepairService';

import { VerticalTimeline } from 'react-vertical-timeline-component'
import { useTranslation } from "react-i18next";
import SalesianosIcon from "../../../assets/Salesianos.jpeg"
import AtosIcon from "../../../assets/Atos.jpg"
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '../../theme/ThemeContext';
import TimelineElement from './TimeLineElement';
import { Constants } from '../../../utils/Constants';

const TimeLine = () => {
  const { t } = useTranslation();
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
        <h2 className='title-h2'>{t("experienceLong")}</h2>
      </div>
      <VerticalTimeline lineColor={theme ? 'white' : 'black'}>
        <TimelineElement
          title={t("t1")}
          description={t("descriptions.d1")}
          date={t("dates.date1")}
          iconUrl={AtosIcon}
          iconOnClick={() => { window.open(Constants.LINKS.atos) }}
          keywords={['FULL_STACK', 'MICROERVICIOS_SPRING_BOOT', 'ANGULAR_REACT', 'DOCKER', 'KUBERNETES']}
        />

        <TimelineElement
          title={t("t2")}
          description={t("descriptions.d2")}
          date={t("dates.date2")}
          iconUrl={AtosIcon}
          iconOnClick={() => { window.open(Constants.LINKS.atos) }}
          keywords={['FULL_STACK', 'ANGULAR', 'SPRING_BOOT', 'JPA', 'TRABAJO_EN_EQUIPO']}
        />

        <TimelineElement
          title={t("t3")}
          description={t("descriptions.d3")}
          date={t("dates.date3")}
          iconUrl={SalesianosIcon}
          iconOnClick={() => { window.open(Constants.LINKS.salesianos) }}
          keywords={['JAVA', 'SCRIPT', 'REACT', 'SPRING_BOOT', 'BASES_DE_DATOS_SQL', 'JPA', 'ARQUITECTURA_SOFTWARE', 'PATRONES_DE_DISENO', 'METODOLOGIAS_AGILES']}
        />
      </VerticalTimeline>
    </div>
  )
}

export default TimeLine