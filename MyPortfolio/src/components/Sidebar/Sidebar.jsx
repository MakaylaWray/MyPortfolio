import React from "react";
import styles from "./Sidebar.module.css";
import { ToggleButton } from "./ToggleButton/ToggleButton";
import { Links } from "./Links/Links";
import { motion } from "framer-motion";
import { useState } from "react"


export const Sidebar = () => {
    const [open,setOpen] = useState(false)
    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transitions: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };
    return (
        <motion.div className={styles.sidebar} animate={open ? "open" : "closed"}>
            <motion.div className={styles.bg} variants ={variants}>
                <Links/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    )
};