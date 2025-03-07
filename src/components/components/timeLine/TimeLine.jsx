import React, { useEffect, useState } from 'react'
import './TimeLine.css'
import CodeIcon from '@mui/icons-material/Code';
import Work from '@mui/icons-material/HomeRepairService';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { useTranslation } from "react-i18next";
import 'react-vertical-timeline-component/style.min.css';

const TimeLine = () => {

  const selectedTheme = localStorage.getItem('selectedTheme')
  const [theme, setTheme] = useState(selectedTheme === "dark");

  const { t } = useTranslation();
  useEffect(() => {
      const handleThemeChange = () => {
        setTheme(localStorage.getItem("selectedTheme") === "dark");
      };
  
      const observer = new MutationObserver(handleThemeChange);
      observer.observe(document, { subtree: true, childList: true });
  
      return () => observer.disconnect();
    }, []);

    return (
        <div className='general-container'>
          <div className='experience-title'>
            <Work fontSize="large" sx={{ color: 'var(--secundary-color)'}}/>
            <h2 className='title-h2'>{t("experienceLong")}</h2>
          </div>
            <VerticalTimeline lineColor={theme ? 'white' : 'black'}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'grey', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid grey' }}
                    date="September 2021 - May 2023"

                    iconStyle={{ background: 'grey', color: '#000', border: 'black' }}
                    icon={<CodeIcon />}
                >
                    <div className='salesianos-text'>
                        <h3><b>{t("t1")}</b></h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae numquam, hic distinctio itaque quis doloribus animi non aspernatur illum, nulla, dolores dolorem delectus voluptatibus est fuga. Mollitia, aut cum?
                        </p>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'grey', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid grey' }}
                    date="September 2021 - May 2023"
                    iconStyle={{ background: 'grey', color: '#000' }}
                    icon={<CodeIcon />}
                >
                    <div className='salesianos-text'>
                        <h3><b>{t("t2")}</b></h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae numquam, hic distinctio itaque quis doloribus animi non aspernatur illum, nulla, dolores dolorem delectus voluptatibus est fuga. Mollitia, aut cum?
                        </p>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'grey', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid grey' }}
                    date="September 2021 - May 2023"
                    iconStyle={{ background: 'grey', color: '#000' }}
                    icon={<CodeIcon />}
                >
                    <div className='salesianos-text'>
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