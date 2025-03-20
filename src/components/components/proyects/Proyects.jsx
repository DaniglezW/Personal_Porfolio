import React from 'react'
import './Proyects.css'
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useLanguage } from '../../../contexts/LanguageContext';

const Proyects = () => {
  const { language, resources } = useLanguage();

  return (
    <div>
      <div className='experience-title'>
        <AssignmentIcon fontSize="large" sx={{ color: 'var(--secundary-color)' }} />
        <h2 className='title-h2'>{resources[language]?.translation?.proyects}</h2>
      </div>
    </div>
  )
}

export default Proyects