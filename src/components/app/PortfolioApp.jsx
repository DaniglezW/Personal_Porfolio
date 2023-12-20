import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BodyLayout from '../layout/BodyLayout'
import Body from '../pages/Body'
import { Constants } from '../../utils/Constants'

const PortfolioApp = () => {

    console.log(Constants.BANNER);
    console.log(Constants.NAME_APP + ", Port : " + Constants.PORT);

    return (
        <>
            <Routes>
                <Route path='/' element={<BodyLayout />}>
                    <Route path='/' element={<Body />} />
                </Route>
            </Routes>
        </>
    )
}

export default PortfolioApp