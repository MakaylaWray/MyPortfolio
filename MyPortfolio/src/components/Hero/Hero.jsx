import React from 'react'
import { getImageUrl } from '../../util'
import styles from "./Hero.module.css";

export const Hero = () => {
    return ( 
        <section className={styles.wrapper}>
            <section className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Hiya There! <br/>It's Me <span className={styles.titlecolor}>Makayla.</span>
                    </h1>
                    <p className={styles.description}>I'm a full-stack developer.<br/> Reach out if you'd like to learn more!</p>
                    <div className={styles.btncontainer}>
                        <button className={styles.leftbtn}>View Projects</button>
                        <button className={styles.rightbtn}>Download CV</button>
                    </div>
                </div>
                <img src={getImageUrl("hero/hero-pic.png")} alt="Hero image of me" className={styles.heroimg}></img>
            </section>
            <div className={styles.wavecontainer}>
                <div className={styles.divtop}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shapefill}></path>
                    </svg>
                </div>
            </div>
        </section>
    );
};