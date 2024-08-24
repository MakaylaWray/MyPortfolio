import React from 'react'
import { getImageUrl } from '../../util'

import styles from "./Hero.module.css";


export const Hero = () => {
    return ( <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hiya There! <br/>It's Me Makayla
            </h1>
            <p className={styles.description}>I'm a full-stack developer.<br/> Reach out if you'd like to learn more!</p>
            <div className={styles.btncontainer}>
                <button className={styles.leftbtn}>View Projects</button>
                <button className={styles.rightbtn}>Download CV</button>
            </div>
        </div>
        <img src={getImageUrl("hero/hero-pic.png")} alt="Hero image of me" className={styles.heroimg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
    );
};