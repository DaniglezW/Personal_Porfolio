import React from 'react'
import './Proyects.css'
import { useTranslation } from 'react-i18next';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Proyects = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='experience-title'>
        <AssignmentIcon fontSize="large" sx={{ color: 'var(--secundary-color)' }} />
        <h2 className='title-h2'>{t("proyects")}</h2>
      </div>
    </div>
  )
}

export default Proyects