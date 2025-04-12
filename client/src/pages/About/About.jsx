import "./About.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h1 className="about-title">{t("about.title")}</h1>
    </div>
  );
}

export default About;
