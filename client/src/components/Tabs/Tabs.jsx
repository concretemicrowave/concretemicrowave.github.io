import "./Tabs.css";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import icon from "../../assets/icon.png";
import HamburgerMenu from "./HamburgerMenu";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

function Tabs() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 855);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/";

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 855);
    const handleScroll = () => setScrolled(window.scrollY > 0);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tabsClassName = `tabs ${scrolled || !isHome ? "tabs-scrolled" : ""}`;

  return (
    <div className={tabsClassName}>
      <NavLink to="/" className="noactive">
        <img src={icon} className="logo" alt="Logo" />
      </NavLink>
      {isMobile ? (
        <HamburgerMenu scrolled={scrolled || !isHome} />
      ) : (
        <>
          <NavLink to="/" className="tab home-tab" activeclassname="active">
            {t("home-tab")}
          </NavLink>
          <NavLink to="/about" className="tab" activeclassname="active">
            {t("about-tab")}
          </NavLink>
          {/* <NavLink to="/services" className="tab" activeclassname="active">
            {t("services-tab")}
          </NavLink> */}
          <NavLink to="/witness" className="tab" activeclassname="active">
            {t("witness-tab")}
          </NavLink>
          {/* <NavLink to="/church-life" className="tab" activeclassname="active">
            {t("church-life-tab")}
          </NavLink>
          <NavLink to="/giving" className="tab" activeclassname="active">
            {t("giving-tab")}
          </NavLink> */}
        </>
      )}
      <div className="lang-container">
        <button
          className="lang-button"
          onClick={() => switchLanguage(currentLang === "en" ? "zh" : "en")}
        >
          <FontAwesomeIcon
            icon={faExchangeAlt}
            style={{ marginRight: "0.5rem" }}
          />
          {currentLang === "en" ? "中文" : "English"}
        </button>
      </div>
    </div>
  );
}

export default Tabs;
