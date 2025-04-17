import "./Sermons.css";
import { useTranslation } from "react-i18next";
import SermonsList from "../../components/SermonsList/SermonsList";

function Sermons() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h1>{t("sermons.title")}</h1>
      <SermonsList />
    </div>
  );
}

export default Sermons;
