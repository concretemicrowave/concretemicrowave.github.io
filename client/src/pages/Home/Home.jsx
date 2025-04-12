import { useTranslation } from "react-i18next";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div className="home">
        <div className="home-header">
          <div className="home-title-container">
            <h1 className="home-title">{t("title-1")}</h1>
            <h2 className="home-title tinted">{t("title-2")}</h2>
          </div>
          <div className="cta-container">
            <h2 className="cta-title">{t("cta-title")}</h2>
            <NavLink to="/about" className="cta-button">
              {t("cta-button")}
            </NavLink>
            <NavLink to="/services" className="cta-button hollow">
              {t("cta-button-services")}
            </NavLink>
          </div>
          <div className="home-background"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
