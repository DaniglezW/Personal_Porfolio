import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BodyLayout from '../layout/BodyLayout'
import Body from '../pages/Body'
import ScrollToTop from 'react-scroll-to-top'
import { ThemeProvider } from '../theme/ThemeContext'

const PortfolioApp = () => {
    return (
        <ThemeProvider>
            <Routes>
                <Route path='/' element={<BodyLayout />}>
                    <Route path='/' element={<Body />} />
                </Route>
            </Routes>
            <ScrollToTop smooth />
        </ThemeProvider>
    )
}

export default PortfolioApp