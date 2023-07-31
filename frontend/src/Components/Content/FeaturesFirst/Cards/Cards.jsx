import React from "react";
import css from "./Cards.module.css";
import Card from "./Card/Card";
import CardImage1 from "../../../../Images/image_1.png";
import CardImage2 from "../../../../Images/image_2.png";

const Cards = () => {
  return (
    <div className={css.features_cards_row}>
      <Card
        title="Ask in your own words..."
        description="Ask Gems like how you’d ask a friend. It’s fast and feels truly effortless."
        image={CardImage1}
      />
      <Card
        title="...or in somebody else’s"
        description="Clip any text to provide context for what you ask Gems."
        image={CardImage2}
      />
    </div>
  );
};

export default Cards;
