import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();

    return (
        <div className='container-about-me'>
          <div className='experience-title'>
            <PersonOutlineIcon fontSize="large" sx={{ color: 'var(--secundary-color)'}}/>
            <h2 className='title-h2'>{t("aboutMe")}</h2>
          </div>
            {/* <div className='text-about-me'>
                <h2>Hi there</h2>
                <p></p>
            </div>
            <div className='img-about-me'>
                
            </div> */}
        </div>
    )
}

export default AboutMe