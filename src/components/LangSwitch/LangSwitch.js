import React, {useContext} from "react";
import "./LangSwitch.scss";
import StyleContext from "../../contexts/StyleContext";

export default function LangSwitch() {
  const {isVi, changeLang} = useContext(StyleContext);

  return (
    <button
      className="lang-toggle-btn"
      onClick={changeLang}
      title={isVi ? "Switch to English" : "Chuyển sang tiếng Việt"}
      aria-label="Toggle language"
    >
      <span className="lang-text">{isVi ? "VI" : "EN"}</span>
    </button>
  );
}
