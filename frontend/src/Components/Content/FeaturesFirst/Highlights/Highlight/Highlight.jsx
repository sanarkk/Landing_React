import React from "react";
import css from "./Highlight.module.css";

const Highlight = (props) => {
  return (
    <div className={css.highlight + " " + css.description}>
      <div className={css.highlight_image}>
        <img src={props.image} alt="" />
      </div>
      <div className={css.highlight_text}>
        <p>
          <span className={css.highlight_bold}>{props.title}</span>
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Highlight;
