import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import "./ServiceCard.css";

function ServiceCard({ icon, title, description, colorClassName }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`service-card ${colorClassName ? colorClassName : ""}`}
      data-theme={theme}
    >
      {icon()}
      <div className="text">
        <h3 data-theme={theme}>{title}</h3>
        <p data-theme={theme}>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
