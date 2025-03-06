/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import LogoDarkMode from '../../assets/LetterD.png'
import LogoLightMode from '../../assets/LogoLightMode.png'
import './Header.css'
import SocialMedia from '../components/socialMedia/SocialMedia'
import { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkMode from '../components/darkMode/DarkMode'
import LanguageSwitcher from '../components/languageSwitcher/LanguageSwitcher'


const Header = () => {

  const selectedTheme = localStorage.getItem('selectedTheme');

  const [theme, setTheme] = useState(selectedTheme === "dark");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(localStorage.getItem("selectedTheme") === "dark");
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document, { subtree: true, childList: true });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  if (isMobile) {
    return (
      <div className='mobile-header'>
        <div className='mobile-header-top'>
          <div className='logo-container-mobile'>
            <div className='logo-size-mobile'>
              <img
                src={theme ? LogoDarkMode : LogoLightMode}
                className='logo-header'
                alt='logo'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
          <div className='mobile-header-top-options'>
            <button className='btn burger-menu' onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className={theme ? 'mobile-menu-dark-mode' : 'mobile-menu-light-mode'}>
            <div className='mobile-menu-item' onClick={() => scrollToSection('proyects')}>Proyects</div>
            <div className='mobile-menu-item' onClick={() => scrollToSection('technologies')}>Technologies</div>
            <div className='mobile-menu-item' onClick={() => scrollToSection('time-line')}>Experience</div>
            <SocialMedia />
            <div>
              <DarkMode
                theme={theme}
                setTheme={setTheme}
                selectedTheme={selectedTheme}
              />
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='header-container'>
      <nav className='navbar'>
        <div className='logo-container'>
          <img
            src={theme ? LogoDarkMode : LogoLightMode}
            className="logo-header"
            alt="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className='parts'>
          <div className='rotated-parts'>
            <div className='hover-effect'><a href="#proyects">Proyects</a></div>
            <div className='hover-effect'><a href="#technologies">Technologies</a></div>
            <div className='hover-effect'><a href="#time-line">Experience</a></div>
          </div>
        </div>

        <SocialMedia />
      </nav>
    </div>
  )
}

export default Header