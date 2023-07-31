import React from "react";
import WebIntro from "./Intro/WebIntro";
import FeaturesFirst from "./FeaturesFirst/FeaturesFirst";
import css from "./Content.module.css";

const Content = () => {
  return (
    <div className={css.container}>
      <div className={css.intro}>
        <div className={css.container}>
          <WebIntro />
        </div>
      </div>
      <div className={css.features}>
        <div className={css.container}>
          <FeaturesFirst />
        </div>
      </div>
    </div>
  );
};

export default Content;
