import React from "react";
import Logo from "./Logo/Logo";
import Links from "./Links/Links";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.footer_row}>
          <Logo />
          <Links />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
