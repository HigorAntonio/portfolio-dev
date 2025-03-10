import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import "./SkillTag.css";

function SkillTag({ icon, alt, text }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="tag" data-theme={theme}>
      <img src={icon} alt={alt} data-theme={theme} />
      <p data-theme={theme}>{text}</p>
    </div>
  );
}

export default SkillTag;
