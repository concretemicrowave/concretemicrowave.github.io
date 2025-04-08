import "./Tabs.css";
import { useTranslation } from "react-i18next";

function Tabs() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="tabs">
      <a className="tab home">{t("home")}</a>
      <a className="tab">{t("about")}</a>
      <a className="tab">{t("services")}</a>
      <a className="tab">{t("witness")}</a>
      <a className="tab">{t("church-life")}</a>
      <a className="tab">{t("giving")}</a>
      <div className="lang-buttons">
        <div className="divider"></div>
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
