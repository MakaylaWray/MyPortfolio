import React from 'react'
import { getImageUrl } from '../../util'

import styles from "./Hero.module.css";


export const Hero = () => {
    return ( <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                HIYA THERE! <br/>It's Me <span className={styles.titlecolor}>Makayla.</span>
            </h1>
            <p className={styles.description}>I'm a full-stack developer.<br/> Reach out if you'd like to learn more!</p>
            <div className={styles.btncontainer}>
                <button className={styles.leftbtn}>View Projects</button>
                <button className={styles.rightbtn}>Download CV</button>
            </div>
        </div>
        <img src={getImageUrl("hero/hero-pic.png")} alt="Hero image of me" className={styles.heroimg}></img>
    </section>
    );
};