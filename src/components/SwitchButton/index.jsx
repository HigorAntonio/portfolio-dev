import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import "./SwitchButton.css";

function SwitchButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="switch" onClick={toggleTheme}>
      <div className="track" data-theme={theme}>
        <button className="handle" data-theme={theme}>
          <div>
            <div className="handle-icon" data-theme={theme}></div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default SwitchButton;
