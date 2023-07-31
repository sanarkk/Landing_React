import React from "react";
import css from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={css.features_card}>
      <div className={css.features_card_text}>
        <div className={css.features_card_title + " " + css.title}>
          <p>{props.title}</p>
        </div>
        <div className={css.features_card_description + " " + css.description}>
          <p>{props.description}</p>
        </div>
      </div>
      <div className={css.features_card_image}>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default Card;
