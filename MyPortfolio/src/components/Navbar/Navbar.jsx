import React from "react"
import styles from "./NavBar.module.css"
import { getImageUrl } from "../../util"
import { motion } from "framer-motion"
import { Sidebar } from "../../components/Sidebar/Sidebar"


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
            <Sidebar/>
        </nav>
    );
};