import React from 'react'
import Header from '../pages/Header'
import { Outlet } from 'react-router-dom'
import './BodyLayout.css'
import Footer from '../pages/Footer'

const BodyLayout = () => {
    return (
        <div className="bodylayout">
            <Header />
            <div className='all-body-container'>
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default BodyLayout