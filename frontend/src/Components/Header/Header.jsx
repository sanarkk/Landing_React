import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import Navigation from "./Navigation/Navigation";
import css from './Header.module.css'

const Header = () => {
    return(
        <header className={css.header}>
            <div className={css.container}>
            <div className={css.header_row}>
                <Navigation />
                <Dropdown />
            </div>
            </div>
        </header>
    )
}

export default Header;