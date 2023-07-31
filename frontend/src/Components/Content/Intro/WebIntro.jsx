import React from "react";
import Companies from "./Companies/Companies";
import css from "./WebIntro.module.css";

const WebIntro = () => {
  return (
    <div className={css.intro_row}>
      <div className={css.intro_title}>
        <p>
          Your <span className={css.intro_ai}>AI</span>
          <span className={css.br_title}></span> knowledge assistant
        </p>
      </div>
      <div className={css.intro_description}>
        Get ready-to-use answers from all your knowledge
        <br />
        and quit manual organization for good.
      </div>
      <div className={css.intro_button}>
        <button>GET STARTED FOR FREE</button>
      </div>
      <div className={css.intro_image}>
        <img
          src="https://uploads-ssl.webflow.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2.png"
          alt=""
        />
      </div>
      <div className={css.intro_text}>
        <p>
          Loved by professionals from
          <br />
          companies such as
        </p>
      </div>
      <Companies />
    </div>
  );
};

export default WebIntro;
