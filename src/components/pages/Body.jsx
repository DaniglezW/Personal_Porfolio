/* eslint-disable no-unused-vars */
import CodeIcon from '@mui/icons-material/Code';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import profileWhiteImg from "../../assets/ProfileWhite.png";
import profileBlackImg from "../../assets/ProfileBlack.png";
import './Body.css';
import styled from '@emotion/styled';
import TimeLine from '../components/timeLine/TimeLine';
import AboutMe from '../components/aboutMe/AboutMe';
import DarkMode from '../theme/darkMode/DarkMode';
import { useEffect, useState } from 'react';
import Technologies from '../components/technologies/Technologies';
import Proyects from '../components/proyects/Proyects';
import LanguageSwitcher from '../common/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../theme/ThemeContext';

const Body = () => {
  const StyledCodeIcon = styled(CodeIcon)`
  font-size: 60px;
  color: grey;
  margin-left: 5%;
  margin-right: 5%;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }
`;

  const { theme, setTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(localStorage.getItem("selectedTheme") === "dark");
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document, { subtree: true, childList: true });

    return () => observer.disconnect();
  }, [setTheme]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='container' className="body-container">
      <div className='container-dm'>
        {!isMobile && <>
          <DarkMode />
          <LanguageSwitcher />
        </>}
      </div>
      <div className="title">
        <span className="name" onClick={() => scrollToSection('about-me')}>DANIEL GONZÁLEZ</span>
        <div className="developer">
          <div className="category">
            <div className="hover">
              <p>Software</p>
            </div>
            <hr />
          </div>
          <div className="category">
            <div className="icon-developer">
              <StyledCodeIcon sx={{ fontSize: 60, color: 'grey', marginLeft: '5%', marginRight: '5%' }} className="my-code-icon" />
              <div className="hover">
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-container">
        <div className="text-section">
          {
            i18n.language === 'es' ?
              <p>Soy <span className="highlight">desarrollador de software especializado en aplicaciones web</span>,
                con interés en crear soluciones eficientes y bien estructuradas.
                Resido en Tenerife, España, y me apasiona seguir aprendiendo y mejorando mis habilidades cada día.</p> :
              <p>I am a <span className="highlight">software developer specialized in web applications</span>, with an interest in creating efficient and well-structured solutions. I reside in Tenerife, Spain, and I am passionate about continuing to learn and improve my skills every day.</p>
          }
        </div>
        <div className="profile-section">
          <img src={theme ? profileBlackImg : profileWhiteImg} alt="Profile" className="profile-picture" onClick={() => scrollToSection('about-me')} />
          <a href="mailto:dani.flex.work@gmail.com" className="contact-button">
            <ForwardToInboxIcon />
            <span>{t("contact")}</span>
          </a>
        </div>
      </div>
      <div className="body-content">
        <section id='time-line'>
          <TimeLine theme={theme} setTheme={setTheme}/>
        </section>
        <section id='technologies'>
          <Technologies />
        </section>
        {/* <section id='proyects'>
          <Proyects />
        </section> */}
        <section id='about-me'>
          <AboutMe />
        </section>
      </div>
    </div>
  );
};

export default Body;
