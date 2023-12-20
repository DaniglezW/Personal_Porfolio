import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>&copy; <span>{new Date().getFullYear()}</span> Daniel González
                <a className='footer-link' href="/humans.txt" target="_self" rel="noopener noreferrer">
                    Crafted by yours truly
                </a>
            </p>
        </div>
    )
}

export default Footer