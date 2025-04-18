import { useTranslation } from "react-i18next";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div className="page">
        <h2 className="name">{t("title")}</h2>
        <div className="home-header">
          <div className="home-title-container">
            <h1 className="home-title">{t("title-1")}</h1>
            <h2 className="home-title tinted">{t("title-2")}</h2>
          </div>
          <div className="cta-container">
            <div className="cta-title-container">
              <h2 className="cta-title">{t("cta-title")}</h2>
              <div className="cta-underline"></div>
            </div>
            <NavLink to="/about/contact" className="cta-button">
              {t("cta-button")}
            </NavLink>
            <NavLink to="/about/church" className="cta-button hollow">
              {t("cta-button-about")}
            </NavLink>
          </div>
          <div className="home-background"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
