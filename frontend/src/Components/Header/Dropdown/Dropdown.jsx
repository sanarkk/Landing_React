import React from "react";
import css from './Dropdown.module.css'

const Dropdown = () => {
    return(
        <div className={css.header_dropdown}>
            <button>DOWNLOAD</button>
            <div className={css.dropdown_content}>
                <a rel="noopener" href="#apple_m2"><img className={css.dropdown_logo} src="https://uploads-ssl.webflow.com/643e6ce50c675406e7c9e19c/6440dee55081903fff7b0ca3_APPLE-LOGO.svg" alt="logo" />APPLE M2</a>
                <a rel="noopener" href="#apple_m1"><img className={css.dropdown_logo} src="https://uploads-ssl.webflow.com/643e6ce50c675406e7c9e19c/6440dee55081903fff7b0ca3_APPLE-LOGO.svg" alt="logo" />APPLE M1</a>
                <a rel="noopener" href="#apple_intel"><img className={css.dropdown_logo} src="https://uploads-ssl.webflow.com/643e6ce50c675406e7c9e19c/6440dee687dd930169422ae9_intel-6%201.svg" alt="logo" />APPLE INTEL</a>
                <a rel="noopener" href="#windows"><img className={css.dropdown_logo} src="https://uploads-ssl.webflow.com/643e6ce50c675406e7c9e19c/6440dee5ade4cf3f2a1056d7_microsoft-5%201.svg" alt="logo" />WINDOWS</a>
            </div>
        </div>
    )
}

export default Dropdown;