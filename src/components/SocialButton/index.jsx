import { useContext } from "react";
import { PiArrowUpRight } from "react-icons/pi";

import { ThemeContext } from "../../context/ThemeContext";

import "./SocialButton.css";

function SocialButton({ href, icon, text }) {
  const { theme } = useContext(ThemeContext);

  return (
    <a href={href} className="social-button" data-theme={theme}>
      {icon()}
      <p data-theme={theme}>{text}</p>
      <PiArrowUpRight className="arrow-up-right-icon" data-theme={theme} />
    </a>
  );
}

export default SocialButton;
