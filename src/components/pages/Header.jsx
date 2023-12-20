/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Constants } from '../../utils/Constants'
import Logo from '../../assets/logo.png'
import LogoInsta from '../../assets/instagram.png'
import LogoLinkedin from '../../assets/linkedin.png'
import LogoGithub from '../../assets/github.png'
import './Header.css'

const Header = () => {

    return (
        <div className='header-container'>
            <nav className='navbar'>
                <div className='logo-container'>
                    <img src={Logo} className='logo-header' alt='img' />
                </div>
                <div className='parts'>
                    <div className='rotated-parts'>
                        <div className='hover-effect'><span>Contact</span></div>
                        <div className='hover-effect'><span>Projects</span></div>
                        <div className='hover-effect'><span>Tecnologies</span></div>
                        <div className='hover-effect'><span>Details</span></div>
                    </div>
                </div>

                <div className='links'>
                    <a  className="icono-red-social" href={Constants.LINKS.instagram}>
                        <img src={LogoInsta} className='logo-link' alt='img' />
                    </a>
                    <a  className="icono-red-social" href={Constants.LINKS.linkedin}>
                        <img src={LogoLinkedin} className='logo-link' alt='img' />
                    </a>
                    <a  className="icono-red-social" href={Constants.LINKS.github}>
                        <img src={LogoGithub} className='logo-link' alt='img' />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header