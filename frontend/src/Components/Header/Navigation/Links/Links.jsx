import React from "react";
import css from './Links.module.css'

const Links = () => {
    return(
        <div className={css.header_links}>
            <a href="#intro" className={css.link}>Features</a>
            <a href="#twitter" className={css.link}>Twitter</a>
            <a href="#blog" className={css.link}>Blog</a>
        </div>
    )
}

export default Links;