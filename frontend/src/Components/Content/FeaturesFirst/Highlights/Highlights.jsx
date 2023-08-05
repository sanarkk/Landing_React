import React from "react";
import Highlight from "./Highlight/Highlight";
import css from "./Highlights.module.css";

const Highlights = (props) => {
  return (
    <div className={css.features_highlights_row}>
      <Highlight
        image={props.highlightImageOne}
        title={props.highlightTitleOne}
        description={props.highlightDescriptionOne}
      />
      <Highlight
        image={props.highlightImageTwo}
        title={props.highlightTitleTwo}
        description={props.highlightDescriptionTwo}
      />
      <Highlight
        image={props.highlightImageThree}
        title={props.highlightTitleThree}
        description={props.highlightDescriptionThree}
      />
    </div>
  );
};

export default Highlights;
