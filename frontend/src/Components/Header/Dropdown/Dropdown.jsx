import React from "react";
import css from "./Dropdown.module.css";

const Dropdown = () => {
  let links = [
    {
      id: 1,
      name: "APPLE M2",
      image:
        "https://uploads-ssl.webflow.com/643e6ce50c675406e7c9e19c/6440dee55081903fff7b0ca3_APPLE-LOGO.svg",
    },
    {
      id: 2,
      name: "APPLE M1",
      image:
        "https://uploads-ssl.webflow.com/643e6ce50c675406e7c9e19c/6440dee55081903fff7b0ca3_APPLE-LOGO.svg",
    },
    {
      id: 3,
      name: "APPLE INTEL",
      image:
        "https://uploads-ssl.webflow.com/643e6ce50c675406e7c9e19c/6440dee687dd930169422ae9_intel-6%201.svg",
    },
    {
      id: 4,
      name: "INTEL",
      image:
        "https://uploads-ssl.webflow.com/643e6ce50c675406e7c9e19c/6440dee5ade4cf3f2a1056d7_microsoft-5%201.svg",
    },
  ];
  return (
    <div className={css.header_dropdown}>
      <button>DOWNLOAD</button>
      <div className={css.dropdown_content}>
        {links.map((linka) => (
          <div key={linka.id}>
            <a rel="noopener" href="#empty">
              <img className={css.dropdown_logo} src={linka.image} alt="logo" />
              {linka.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
