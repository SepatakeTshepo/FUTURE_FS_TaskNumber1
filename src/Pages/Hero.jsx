import React from "react";
import mypicture  from "../assets/pic1.jpeg";
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import {Link ,NavLink} from "react-router-dom"
import { useEffect, useState } from 'react'
import styles from "./Hero.module.css"
const titles = [
  "Computer Science Student ",
  "Software Developer",
  "Full stack Web Developer"
];

const Hero = ()=>{

   const [visible, setVisible] = useState(false);
   const [titleIndex , setTitleIndex] = useState(0);
   const [displayed , setDisplayed] = useState ("");
   const [phase , setPhase ] = useState ("typing");// typing |filled | clearing

   useEffect (() => {

    setTimeout (() => setVisible (true) , 100)
   } , []
  
  );
// typing cycle
useEffect(() => {
  const current = titles[titleIndex];

  if (phase === "typing") {
    if (displayed.length < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
      return () => clearTimeout(t);
    } else {
      // fully typed while FILLED — pause then start clearing to outline
      const t = setTimeout(() => setPhase("clearing"), 1000);
      return () => clearTimeout(t);
    }
  }

  if (phase === "clearing") {
    if (displayed.length > 0) {
      const t = setTimeout(() => {
        setDisplayed(displayed.slice(0, displayed.length - 1));
      }, 45);
      return () => clearTimeout(t);
    } else {
      // fully cleared — move to next
      setTitleIndex((i) => (i + 1) % titles.length);
      setPhase("typing");
    }
  }
}, [displayed, phase, titleIndex]);


    return (


        <div className = {` ${styles.container} ${visible ? styles.visible : ""}`}>
{/*Animated bg bobs*/}
           <div className={styles.blob1} />
      <div className={styles.blob2} />

      {/* left — text content */}
            <div className={styles.content}>

             <h3 className={styles.greeting}>Hello.</h3>
              
             <p className={styles.names}> <span className={styles.nameLine} /><span className={styles.highlight}>Im</span> Sepatake Tshepo </p>
             {/* animated title */}
        <div className={styles.titleWrapper}>
          <span className={`${styles.titleText} ${phase === "clearing" ? styles.outline : styles.filled}`}>
  {displayed}
  <span className={styles.cursor}>|</span>
</span>
        </div>
             <p className={styles.tagline}>
          My mandate is clear — I solve problems using code 
        </p>

            

            <div className={styles.buttons}>
                <Link to="/projects" className={styles.btnprimary}>View Projects</Link>
                <Link to="/Contacts" className = {styles.btnsecondary}> Contact Me</Link>

                  </div>
            </div>

        <div className={styles.imageWrapper}>
        <div className={styles.imageGlow} />
        <div className= {styles.divider}></div>
        <img src={mypicture} alt="Tshepo Sepatake" className={styles.photo} />
      
<div className= {styles.divider}></div>
<div className={styles.icons}>
          <a href="https://github.com/SepatakeTshepo" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/tshepo-sepatake-2531a6380/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
        
          <a href="https://wa.me/27821234567" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className={styles.icon} />
          </a>
        </div>
</div>

        </div>


    );
};

export default Hero;