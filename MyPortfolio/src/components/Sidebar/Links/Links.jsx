import React from "react";
import styles from "../../Sidebar/Sidebar.module.css"

export const Links = () => {
    const items = ["Home","About","Experience","Skills/Projects","Contact"];
    return (
        <div className={styles.links}>
            {items.map((item) => ( 
                <a href={`#${item}`} key={item}>
                    {item}
                </a>
            ))}
        </div>
    );
};