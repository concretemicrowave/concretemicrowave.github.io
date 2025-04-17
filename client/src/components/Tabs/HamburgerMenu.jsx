import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./HamburgerMenu.css";

function HamburgerMenu({ scrolled }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      <button
        className={scrolled ? "hamburger-icon scrolled" : "hamburger-icon"}
        onClick={() => setOpen(true)}
      >
        ☰
      </button>
      <div className={`drawer ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </button>
        <NavLink to="/" className="tab home-tab" activeclassname="active">
          {t("home-tab")}
        </NavLink>
        <NavLink to="/about" className="tab" activeclassname="active">
          {t("about-tab")}
        </NavLink>
        <NavLink to="/sermons" className="tab" activeclassname="active">
          {t("sermons-tab")}
        </NavLink>
        {/* <NavLink to="/witness" className="tab" activeclassname="active">
          {t("witness-tab")}
        </NavLink> */}
        {/* <NavLink to="/church-life" className="tab" activeclassname="active">
          {t("church-life-tab")}
        </NavLink>
        <NavLink to="/giving" className="tab" activeclassname="active">
          {t("giving-tab")}
        </NavLink> */}
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </div>
  );
}

export default HamburgerMenu;
