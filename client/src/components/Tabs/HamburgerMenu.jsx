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
        <NavLink to="/" onClick={() => setOpen(false)}>
          {t("home-tab")}
        </NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>
          {t("about-tab")}
        </NavLink>
        {/* <NavLink to="/services" onClick={() => setOpen(false)}>
          {t("services-tab")}
        </NavLink> */}
        <NavLink to="/witness" onClick={() => setOpen(false)}>
          {t("witness-tab")}
        </NavLink>
        {/* <NavLink to="/church-life" onClick={() => setOpen(false)}>
          {t("church-life-tab")}
        </NavLink>
        <NavLink to="/giving" onClick={() => setOpen(false)}>
          {t("giving-tab")}
        </NavLink> */}
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </div>
  );
}

export default HamburgerMenu;
