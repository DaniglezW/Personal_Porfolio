import CodeIcon from '@mui/icons-material/Code';
import './Body.css';
import styled from '@emotion/styled';
import TimeLine from '../components/timeLine/TimeLine';
import AboutMe from '../components/aboutMe/AboutMe';
import DarkMode from '../components/darkMode/DarkMode';
import { useState } from 'react';

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

    const selectedTheme = localStorage.getItem('selectedTheme')
    const [theme, setTheme] = useState(
        selectedTheme === 'dark'
            ? true : false
    )

    return (
        <div className="body-container">
            <div className='container-dm'>
                <DarkMode
                    theme={theme}
                    setTheme={setTheme}
                    selectedTheme={selectedTheme}
                />
            </div>
            <div className="title">
                <span className="name">DANIEL GONZÁLEZ</span>
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
            <div className="body-content">
                <AboutMe />
                {/* <TimeLine /> */}
            </div>
        </div>
    );
};

export default Body;
