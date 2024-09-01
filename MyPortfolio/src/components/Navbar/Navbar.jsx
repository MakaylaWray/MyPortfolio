import React from "react"
import styles from "./NavBar.module.css"
import { getImageUrl } from "../../util"
import { motion } from "framer-motion"


export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <motion.img 
                initial={{opactity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}} 
                transition={{duration: 0.5}}
                src={getImageUrl("nav/navicon.png")} 
                className={styles.navicon} 
                alt="icon picture of me"/>
            <ul className={styles.menuitems}>
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Skills/Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            {/* <Sidebar/> */}
        </nav>
    );
};