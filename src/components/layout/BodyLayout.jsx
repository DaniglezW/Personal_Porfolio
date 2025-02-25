import React, { useEffect, useState } from 'react'
import Header from '../pages/Header'
import { Outlet } from 'react-router-dom'
import './BodyLayout.css'
import Footer from '../pages/Footer'

const BodyLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
        <div className="bodylayout">
            {!isMobile && <Header />}
            <div className='all-body-container'>
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default BodyLayout