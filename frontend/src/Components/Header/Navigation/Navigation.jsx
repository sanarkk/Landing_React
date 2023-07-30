import React from "react";
import Logo from "./Logo/Logo";
import Links from "./Links/Links";
import css from './Navigation.module.css'

const Navigation = () => {
    return(
        <div className={css.header_data}>
            <Logo />
            <Links />
        </div>
    )
}

export default Navigation;