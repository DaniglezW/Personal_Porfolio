import React, { useEffect } from 'react'
import './TimeLine.css'
import Work from '@mui/icons-material/HomeRepairService';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { useTranslation } from "react-i18next";
import SalesianosIcon from "../../../assets/Salesianos.jpeg"
import AtosIcon from "../../../assets/Atos.jpg"
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '../../theme/ThemeContext';

const TimeLine = () => {
  const { theme, setTheme } = useTheme();

  const { t } = useTranslation();
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
      <div className='experience-title'>
        <Work fontSize="large" sx={{ color: 'var(--secundary-color)' }} />
        <h2 className='title-h2'>{t("experienceLong")}</h2>
      </div>
      <VerticalTimeline lineColor={theme ? 'white' : 'black'}>
        <VerticalTimelineElement
          className="timeline-element"
          contentStyle={{ background: "var(--primary-color)", color: "var(--secundary-color)", borderRadius: "10px", padding: "20px", transition: "box-shadow 0.3s ease-in-out", boxShadow: "0 0 15px var(--shadow-time-line)" }}
          contentArrowStyle={{ borderRight: "7px solid var(--secundary-color)" }}
          date="September 2021 - May 2023"
          dateClassName="timeline-date"
          iconStyle={{ background: "white", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}
          iconOnClick={() => {window.open('https://lacuesta.salesianos.edu/colegio/ciclos-formativos/')}}
          icon={<img src={SalesianosIcon} alt="Salesianos" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
        >
          <div className="salesianos-text">
            <h3><b>{t("t1")}</b></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae numquam, hic distinctio itaque quis doloribus animi non aspernatur illum, nulla, dolores dolorem delectus voluptatibus est fuga. Mollitia, aut cum?
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="timeline-element"
          contentStyle={{ background: "var(--primary-color)", color: "var(--secundary-color)", borderRadius: "10px", padding: "20px", transition: "box-shadow 0.3s ease-in-out", boxShadow: "0 0 15px var(--shadow-time-line)" }}
          contentArrowStyle={{ borderRight: "7px solid var(--secundary-color)" }}
          date="September 2021 - May 2023"
          dateClassName="timeline-date"
          iconStyle={{ background: "white", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}
          iconOnClick={() => {window.open('https://atos.net/es/espana')}}
          icon={<img src={AtosIcon} alt="Salesianos" className='timeline-icon-img' />}
        >
          <div className="salesianos-text">
            <h3><b>{t("t2")}</b></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae numquam, hic distinctio itaque quis doloribus animi non aspernatur illum, nulla, dolores dolorem delectus voluptatibus est fuga. Mollitia, aut cum?
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="timeline-element"
          contentStyle={{ background: "var(--primary-color)", color: "var(--secundary-color)", borderRadius: "10px", padding: "20px", transition: "box-shadow 0.3s ease-in-out", boxShadow: "0 0 15px var(--shadow-time-line)" }}
          contentArrowStyle={{ borderRight: "7px solid var(--secundary-color)" }}
          date="September 2021 - May 2023"
          dateClassName="timeline-date"
          iconStyle={{ background: "white", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}
          iconOnClick={() => {window.open('https://atos.net/es/espana')}}
          icon={<img src={AtosIcon} alt="Salesianos" className='timeline-icon-img' />}
        >
          <div className="salesianos-text">
            <h3><b>{t("t3")}</b></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae numquam, hic distinctio itaque quis doloribus animi non aspernatur illum, nulla, dolores dolorem delectus voluptatibus est fuga. Mollitia, aut cum?
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default TimeLine