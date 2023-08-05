import React from "react";
import css from "../FeaturesFirst/FeaturesFirst.module.css";
import Cards from "../FeaturesFirst/Cards/Cards";
import Highlights from "../FeaturesFirst/Highlights/Highlights";

const FeaturesLast = (props) => {
  return (
    <div className={css.features_row} id="intro">
      <div className={css.features_title + " " + css.title}>
        <p>{props.webData.mainTitle}</p>
      </div>
      <div class={css.features_description + " " + css.description}>
        <p>{props.webData.mainDescription}</p>
      </div>
      <Cards
        titleCardOne={props.webData.titleCardOne}
        descriptionCardOne={props.webData.descriptionCardOne}
        imageCardOne={props.webData.imageCardOne}
        titleCardTwo={props.webData.titleCardTwo}
        descriptionCardTwo={props.webData.descriptionCardTwo}
        imageCardTwo={props.webData.imageCardTwo}
      />
      <Highlights
        highlightTitleOne={props.webData.highlightTitleOne}
        highlightDescriptionOne={props.webData.highlightDescriptionOne}
        highlightImageOne={props.webData.highlightImageOne}
        highlightTitleTwo={props.webData.highlightTitleTwo}
        highlightDescriptionTwo={props.webData.highlightDescriptionTwo}
        highlightImageTwo={props.webData.highlightImageTwo}
        highlightTitleThree={props.webData.highlightTitleThree}
        highlightDescriptionThree={props.webData.highlightDescriptionThree}
        highlightImageThree={props.webData.highlightImageThree}
      />
    </div>
  );
};

export default FeaturesLast;
