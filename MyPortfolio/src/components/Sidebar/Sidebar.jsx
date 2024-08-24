import React from "react";
import styles from "./Sidebar.module.css";
import { ToggleButton } from "./ToggleButton/ToggleButton";
import { Links } from "./Links/Links";


export const Sidebar = () => {
    return (<div className={styles.sidebar}>
        <div className={styles.bg}>
            <Links/>
        </div>
        <ToggleButton/>
    </div>
    )
};