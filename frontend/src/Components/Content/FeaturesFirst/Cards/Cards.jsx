import React from "react";
import css from "./Cards.module.css";
import Card from "./Card/Card";

const Cards = (props) => {
  return (
    <div className={css.features_cards_row}>
      <Card
        title={props.titleCardOne}
        description={props.descriptionCardOne}
        image={props.imageCardOne}
      />
      <Card
        title={props.titleCardTwo}
        description={props.descriptionCardTwo}
        image={props.imageCardTwo}
      />
    </div>
  );
};

export default Cards;
