import "./ChurchAbout.css";
import { useTranslation } from "react-i18next";

function ChurchAbout() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h1 className="page-title">{t("about.church-about.title")}</h1>
      <p>{t("about.church-about.content-1")}</p>
      <p>{t("about.church-about.content-2")}</p>
      <p>{t("about.church-about.content-3")}</p>
      <p>{t("about.church-about.content-4")}</p>
      <p>{t("about.church-about.content-5")}</p>
    </div>
  );
}

export default ChurchAbout;
