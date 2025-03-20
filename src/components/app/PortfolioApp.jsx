import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BodyLayout from '../layout/BodyLayout'
import Body from '../pages/Body'
import ScrollToTop from 'react-scroll-to-top'
import './PortfolioApp.css'
import { ThemeProvider } from '../theme/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'

const PortfolioApp = () => {

  const { isTransitioning } = useLanguage();

  return (
    <ThemeProvider>
      <div className={`fade-container ${isTransitioning ? 'fade-out' : 'fade-in'}`}></div>
      <Routes>
        <Route path='/' element={<BodyLayout />}>
          <Route path='/' element={<Body />} />
        </Route>
      </Routes>
      <div />
      <ScrollToTop smooth />
    </ThemeProvider>
  )
}

export default PortfolioApp