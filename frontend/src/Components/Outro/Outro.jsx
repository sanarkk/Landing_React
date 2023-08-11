import React from "react";
import css from "./Outro.module.css";
import OutroContent from "./OutroContent/OutroContent";

const Outro = () => {
  return (
    <div className={css.outro}>
      <div className={css.container}>
        <OutroContent />
      </div>
    </div>
  );
};

export default Outro;
