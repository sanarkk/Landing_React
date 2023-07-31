import React from "react";
import Highlight from "./Highlight/Highlight";
import css from "./Highlights.module.css";
import HighlightImage1 from "../../../../Images/icon_1.svg";
import HighlightImage2 from "../../../../Images/icon_2.svg";
import HighlightImage3 from "../../../../Images/icon_3.svg";

const Highlights = () => {
  return (
    <div className={css.features_highlights_row}>
      <Highlight
        image={HighlightImage1}
        title="Remember anything."
        description=" Instantly. And without the cognitive overload."
      />
      <Highlight
        image={HighlightImage2}
        title="Simple to use."
        description=" Having the perfect answer is just a question away."
      />
      <Highlight
        image={HighlightImage3}
        title="Easy to set up."
        description=" Connect your tools in seconds. It’s zero upkeep form here."
      />
    </div>
  );
};

export default Highlights;
