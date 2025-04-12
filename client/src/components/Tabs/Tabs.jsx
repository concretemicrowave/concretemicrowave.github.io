import "./Tabs.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import icon from "../../assets/icon.png";

function Tabs() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="tabs">
      <img src={icon} className="logo" alt="Logo" />
      <div className="divider"></div>
      <NavLink to="/" className="tab home-tab" activeclassname="active">
        {t("home")}
      </NavLink>
      <NavLink to="/about" className="tab" activeclassname="active">
        {t("about")}
      </NavLink>
      <NavLink to="/services" className="tab" activeclassname="active">
        {t("services")}
      </NavLink>
      <NavLink to="/witness" className="tab" activeclassname="active">
        {t("witness")}
      </NavLink>
      <NavLink to="/church-life" className="tab" activeclassname="active">
        {t("church-life")}
      </NavLink>
      <NavLink to="/giving" className="tab" activeclassname="active">
        {t("giving")}
      </NavLink>
      <div className="lang-buttons">
        <button
          className={`lang-button ${currentLang === "en" ? "button-active" : ""}`}
          onClick={() => switchLanguage("en")}
        >
          English
        </button>
        <button
          className={`lang-button ${currentLang === "zh" ? "button-active" : ""}`}
          onClick={() => switchLanguage("zh")}
        >
          中文
        </button>
      </div>
    </div>
  );
}

export default Tabs;
