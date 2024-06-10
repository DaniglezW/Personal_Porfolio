import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import BodyLayout from '../layout/BodyLayout'
import Body from '../pages/Body'
import { Constants } from '../../utils/Constants'
import ScrollToTop from 'react-scroll-to-top'

const PortfolioApp = () => {

    let times = 0
    useEffect(() => {
        const logInfo = () => {
            console.log(Constants.BANNER);
            console.log(Constants.NAME_APP);
            times++;
        }
        times === 0 && logInfo();
    })

    return (
        <>
            <Routes>
                <Route path='/' element={<BodyLayout />}>
                    <Route path='/' element={<Body />} />
                </Route>
            </Routes>
            <ScrollToTop smooth />
        </>
    )
}

export default PortfolioApp