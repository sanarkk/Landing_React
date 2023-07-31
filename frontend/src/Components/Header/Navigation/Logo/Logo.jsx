import React from "react";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={css.header_border + " " + css.logo}>
      <a href="#main" className={css.link_logo}>
        Gems
      </a>
      <div className={css.logo_beta}>
        <p>BETA</p>
      </div>
    </div>
  );
};

export default Logo;
