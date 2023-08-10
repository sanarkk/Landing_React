import React from "react";
import css from "./Company.module.css";

const Company = (props) => {
  return (
    <div className={css.company}>
      <img src={props.company} alt="" />
    </div>
  );
};

export default Company;
