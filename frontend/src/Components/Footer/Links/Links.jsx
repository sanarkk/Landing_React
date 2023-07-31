import React from "react";
import css from "./Links.module.css";

const Links = () => {
  return (
    <div className={css.footer_links}>
      <a href="#link" className={css.link}>
        Home
      </a>
      <a href="#intro" className={css.link}>
        Features
      </a>
      <a href="#link" className={css.link}>
        Contact
      </a>
      <a href="#link" className={css.link}>
        Privacy Policy
      </a>
      <a href="#link" className={css.link}>
        Twitter
      </a>
    </div>
  );
};

export default Links;
