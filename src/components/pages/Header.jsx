/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Constants } from '../../utils/Constants'
import Logo from '../../assets/LetterD.png'
import LogoInsta from '../../assets/instagram.png'
import LogoLinkedin from '../../assets/linkedin.png'
import LogoGithub from '../../assets/github.png'
import './Header.css'
import SocialMedia from '../components/socialMedia/SocialMedia'

const Header = () => {

    return (
        <div className='header-container'>
            <nav className='navbar'>
                {/* <div className='logo-container'>
                    <img src={Logo} className='logo-header' alt='img' />
                </div> */}
                <div className='parts'>
                    <div className='rotated-parts'>
                        <div className='hover-effect'><span>Contact</span></div>
                        <div className='hover-effect'><span>Tecnologies</span></div>
                        <div className='hover-effect'><span>Experience</span></div>
                        <div className='hover-effect'><span>Details</span></div>
                    </div>
                </div>

                <SocialMedia />
            </nav>
        </div>
    )
}

export default Header