import './style.css'
import React from 'react'

import Moon from '@mui/icons-material/DarkMode'
import Sun from '@mui/icons-material/Brightness5'
import SwitchBase from '@mui/material/internal/SwitchBase';
import { useTheme } from '../ThemeContext';

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return <SwitchBase
    className='darkmode-switch'
    id='darkmode-toggle'
    type={"checkbox"}
    color='default'
    checked={theme}
    onClick={toggleTheme}
    icon={<Moon sx={{ color: 'grey' }} />}
    checkedIcon={<Sun sx={{ color: '#ffff9b' }} />}
  />
}

export default DarkMode