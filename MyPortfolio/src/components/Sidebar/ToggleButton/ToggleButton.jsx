import React from "react";
import styles from "../../Sidebar/Sidebar.module.css"

export const ToggleButton = ({setOpen}) => {
    return (
        <button className={styles.togglebutton} onClick={() => setOpen((prev) => !prev)}>
            Button
        </button>
    )
};