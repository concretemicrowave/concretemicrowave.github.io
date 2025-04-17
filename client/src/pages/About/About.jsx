import "./About.css";
import { useTranslation } from "react-i18next";
import Cards from "../../components/AboutCards/Cards";

function About() {
  const { t } = useTranslation();

  return (
    <div className="page about">
      <h1 className="page-title">{t("about.title")}</h1>
      <Cards />
    </div>
  );
}

export default About;
