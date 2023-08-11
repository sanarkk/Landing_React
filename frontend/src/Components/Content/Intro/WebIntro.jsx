import React, { useState } from "react";
import Companies from "./Companies/Companies";
import css from "./WebIntro.module.css";
import Modal from "../../Header/Dropdown/Modal/Modal";

const WebIntro = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <button className={css.web_button} onClick={() => setIsOpen(true)}>
          GET STARTED FOR FREE
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          You have a good opportunity to become a member of our software. Our
          products provide people options which will make your life easier.
          Getting started for free is a good point where you can start and try
          our product, but so far it's not available.
        </Modal>
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
