import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import "./ProjectCard.css";

function ProjectCard({ href, thumb, thumbAlt, title, description }) {
  const { theme } = useContext(ThemeContext);

  return (
    <a href={href} className="project-card" data-theme={theme}>
      <img src={thumb} alt={thumbAlt} className="thumbnail" />
      <div className="text">
        <h3 data-theme={theme}>{title}</h3>
        <p data-theme={theme}>{description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
