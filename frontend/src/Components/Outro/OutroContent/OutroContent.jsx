import React from "react";
import css from "./OutroContent.module.css";
import OutroImage from "../../../Images/outro_image.png";

const OutroContent = () => {
  return (
    <div className={css.outro_row}>
      <div className={css.outro_image}>
        <img src={OutroImage} width="117" alt="" />
      </div>
      <div className={css.title}>
        <p>
          Start scooping out
          <br />
          gems today.
        </p>
      </div>
      <div className={css.outro_button}>
        <button>GET STARTED FOR FREE</button>
      </div>
    </div>
  );
};

export default OutroContent;
