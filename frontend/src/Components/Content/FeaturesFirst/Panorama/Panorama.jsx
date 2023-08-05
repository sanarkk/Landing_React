import React from "react";
import css from "./Panorama.module.css";

const Panorama = (props) => {
  return (
    <div className={css.features_panorama_row}>
      <div className={css.features_panorama_text}>
        <div className={css.features_panorama_title + " " + css.title}>
          <p>{props.panTitle}</p>
        </div>
        <div
          className={css.features_panorama_description + " " + css.description}
        >
          <p>{props.panDescription}</p>
        </div>
      </div>
      <div className={css.features_panorama_image}>
        <picture>
          <source media="(max-width: 992px)" srcset={props.mediaPanImage} />
          <img src={props.panImage} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default Panorama;
