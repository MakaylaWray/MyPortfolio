import React from "react"
import styles from "./About.module.css"
import { Timeline } from "../Timeline/Timeline";

export const About = () => {
    return ( <div className={styles.container}>
        <div className={styles.content}>about start</div>
        <Timeline />
        </div>
    );
};