import React from "react";
import styles from "./Timeline.module.css";

export const Timeline = () => {
    return( <div className={styles.timelinecont}>
            <h2>Timeline</h2>
            <ul>
                <li>
                    <div className={styles.box}>
                    <h3 className={styles.event1}><span className={styles.year}>2000</span>Lorem Ipsum</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                    voluptates, quidem, quas, quibusdam quae quia quod.
                    </p>
                    </div>
                </li>
                <li>
                    <div className={styles.box}>
                    <h3 className={styles.event2}><span className={styles.year}>2001</span>Lorem Ipsum</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                    voluptates, quidem, quas, quibusdam quae quia quod.
                    </p>
                    </div>
                </li>
                <li>
                    <div className={styles.box}>
                    <h3 className={styles.event3}><span className={styles.year}>2002</span>Lorem Ipsum</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                    voluptates, quidem, quas, quibusdam quae quia quod.
                    </p>
                    </div>
                </li>
            </ul>
        </div>
               
    );
};