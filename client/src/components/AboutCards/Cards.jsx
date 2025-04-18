import "./Cards.css";
import { useTranslation } from "react-i18next";
import aboutthechurch from "../../assets/aboutthechurch.jpg";
import contactus from "../../assets/contactus.jpg";
import pastoralstaff from "../../assets/pastoralstaff.jpg";
import profession from "../../assets/profession.jpg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Cards() {
  const { t } = useTranslation();

  return (
    <div className="cards-container">
      <NavLink to="/about/church">
        <div className="card">
          <div className="image-wrapper">
            <img src={aboutthechurch} alt="About the Church" />
            <h3>
              <FontAwesomeIcon icon={faLink} /> {t("about.card-1")}
            </h3>
          </div>
        </div>
      </NavLink>
      <NavLink to="/about/contactus">
        <div className="card">
          <div className="image-wrapper">
            <img src={contactus} alt="Contact Us" />
            <h3>
              <FontAwesomeIcon icon={faLink} /> {t("about.card-2")}
            </h3>
          </div>
        </div>
      </NavLink>
      <NavLink to="/about/pastoralstaff">
        <div className="card">
          <div className="image-wrapper">
            <img src={pastoralstaff} alt="Pastoral Staff" />
            <h3>
              <FontAwesomeIcon icon={faLink} /> {t("about.card-3")}
            </h3>
          </div>
        </div>
      </NavLink>
      <NavLink to="/about/profession">
        <div className="card">
          <div className="image-wrapper">
            <img src={profession} alt="Profession" />
            <h3>
              <FontAwesomeIcon icon={faLink} /> {t("about.card-4")}
            </h3>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
