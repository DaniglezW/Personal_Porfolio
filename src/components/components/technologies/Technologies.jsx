import React, { useEffect, useRef } from 'react'
import './Technologies.css';
import SourceIcon from '@mui/icons-material/Source';
import { useTranslation } from 'react-i18next';
import { FaReact, FaAngular, FaJava, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiTypescript, SiKubernetes, SiPython, SiReactrouter, SiFigma } from "react-icons/si";
import { TbBrandReactNative } from 'react-icons/tb';
const Technologies = () => {
  const { t } = useTranslation();

  const techs = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "SQL", icon: <FaDatabase />, color: "#DB4437" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    { name: "React Native", icon: <TbBrandReactNative />, color: "#61DAFB" },
  ];

  const techRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("tech-animate");
        }
      });
    }, options);

    techRefs.current.forEach((tech) => observer.observe(tech));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="experience-title">
        <SourceIcon fontSize="large" sx={{ color: "var(--secundary-color)" }} />
        <h2>{t("technologies")}</h2>
      </div>
      <div className="tech-grid">
        {techs.map((tech, index) => (
          <div key={index} ref={(el) => (techRefs.current[index] = el)} className="tech-item">
            <div className="tech-icon" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;