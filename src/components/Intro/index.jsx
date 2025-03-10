import { useState, useContext } from "react";
import { PiCaretDoubleDown } from "react-icons/pi";

import { ThemeContext } from "../../context/ThemeContext";
import SkillTag from "../SkillTag";

import profileImage from "../../assets/Profile_Image.jpg";
import codeImage from "../../assets/Code.png";
import githubIcon from "../../assets/icons/GitHub.svg";
import htmlIcon from "../../assets/icons/HTML.svg";
import cssIcon from "../../assets/icons/CSS.svg";
import javascriptIcon from "../../assets/icons/JavaScript.svg";
import reactIcon from "../../assets/icons/React.svg";
import nodejsIcon from "../../assets/icons/Node.js.svg";

import "./Intro.css";

function Intro() {
  const { theme } = useContext(ThemeContext);

  const [skills] = useState([
    {
      icon: githubIcon,
      alt: "Ícone do GitHub",
      text: "Github",
    },
    {
      icon: htmlIcon,
      alt: "Ícone do HTML",
      text: "HTML",
    },
    {
      icon: cssIcon,
      alt: "Ícone do CSS",
      text: "CSS",
    },
    {
      icon: javascriptIcon,
      alt: "Ícone do JavaScript",
      text: "Javascript",
    },
    {
      icon: reactIcon,
      alt: "Ícone do React",
      text: "React",
    },
    {
      icon: nodejsIcon,
      alt: "Ícone do Node.js",
      text: "Node.js",
    },
  ]);

  return (
    <section className="intro" data-theme={theme}>
      <div className="info">
        <header className="header">
          <div className="avatar">
            <div className="border">
              <img
                src={profileImage}
                alt="Higor Antônio"
                className="profile-image"
              />
            </div>
            <img src={codeImage} alt="code icon" className="code" />
          </div>
          <div className="text">
            <h1 className="title">
              <span className="text-small" data-theme={theme}>
                Hello World! Meu nome é
                <span className="text-red"> Higor Antônio</span> e sou
              </span>
              <span className="text-large" data-theme={theme}>
                Desenvolvedor Fullstack
              </span>
            </h1>
            <p data-theme={theme}>
              Transformo necessidades em aplicações reais, evolventes e
              funcionais. Desenvolvo sistemas através da minha paixão pela
              tecnologia, contribuindo com soluções inovadoras e eficazes para
              desafios complexos.
            </p>
          </div>
        </header>
        <div className="tags">
          {skills.map((skill, index) => (
            <SkillTag {...skill} key={index} />
          ))}
        </div>
      </div>
      <a href="#projects" data-theme={theme}>
        <PiCaretDoubleDown />
      </a>
    </section>
  );
}

export default Intro;
