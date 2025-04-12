import "./Tabs.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import icon from "../../assets/icon.png";
import HamburgerMenu from "./HamburgerMenu";
import { useState, useEffect } from "react";

function Tabs() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 855);

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 855);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="tabs">
      <img src={icon} className="logo" alt="Logo" />
      <div className="divider"></div>
      {isMobile ? (
        <HamburgerMenu />
      ) : (
        <>
          <NavLink to="/" className="tab home-tab" activeclassname="active">
            {t("home-tab")}
          </NavLink>
          <NavLink to="/about" className="tab" activeclassname="active">
            {t("about-tab")}
          </NavLink>
          <NavLink to="/services" className="tab" activeclassname="active">
            {t("services-tab")}
          </NavLink>
          <NavLink to="/witness" className="tab" activeclassname="active">
            {t("witness-tab")}
          </NavLink>
          <NavLink to="/church-life" className="tab" activeclassname="active">
            {t("church-life-tab")}
          </NavLink>
          <NavLink to="/giving" className="tab" activeclassname="active">
            {t("giving-tab")}
          </NavLink>
        </>
      )}
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
