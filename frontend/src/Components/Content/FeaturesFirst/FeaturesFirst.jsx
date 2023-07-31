import React from "react";
import css from "./FeaturesFirst.module.css";
import Panorama from "./Panorama/Panorama";
import Cards from "./Cards/Cards";
import Highlights from "./Highlights/Highlights";

const FeaturesFirst = () => {
  return (
    <div className={css.features_row} id="intro">
      <div className={css.features_title + " " + css.title}>
        <p>
          Remember anything.
          <br />
          Just ask a question.
        </p>
      </div>
      <div class={css.features_description + " " + css.description}>
        <p>
          Gems is the shortcut for all your knowledge. Just
          <br />
          summon Gems and ask any question.
        </p>
      </div>
      <Panorama />
      <Cards />
      <Highlights />
    </div>
  );
};

export default FeaturesFirst;
