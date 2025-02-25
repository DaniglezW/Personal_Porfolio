import React, { useEffect, useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className={isMobile ? 'footer-container' : 'have-header footer-container'}>
            <p>&copy; <span>{new Date().getFullYear()}</span> Daniel González
                <a className='footer-link' href="/humans.txt" target="_self" rel="noopener noreferrer">
                    Crafted by yours truly
                </a>
            </p>
        </div>
    )
}

export default Footer