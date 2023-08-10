import React from "react";
import css from "./Outro.module.css";
import OutroContent from "./OutroContent/OutroContent";

const Outro = () => {
  return (
    <div class={css.outro}>
      <div class={css.container}>
        <OutroContent />
      </div>
    </div>
  );
};

export default Outro;
