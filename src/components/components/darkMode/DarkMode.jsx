import './style.css'
import React from 'react'

import Moon from '@mui/icons-material/DarkMode'
import Sun from '@mui/icons-material/Brightness5'
import SwitchBase from '@mui/material/internal/SwitchBase';

const DarkMode = ({ theme, setTheme, selectedTheme }) => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark')
        localStorage.setItem('selectedTheme', 'dark')
    }

    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light')
        localStorage.setItem('selectedTheme', 'light')
    }

    if (selectedTheme === 'dark') {
        setDarkMode()
    }

    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDarkMode()
            setTheme(true)
        } else {
            setLightMode()
            setTheme(false)
        }
    }

    return <SwitchBase
        className='darkmode-switch'
        id='darkmode-toggle'
        type={"checkbox"}
        color='default'
        checked={theme}
        onClick={toggleTheme}
        icon={<Moon sx={{ color: 'grey' }} />}
        checkedIcon={<Sun sx={{ color: 'grey' }} />}
    />
}

export default DarkMode