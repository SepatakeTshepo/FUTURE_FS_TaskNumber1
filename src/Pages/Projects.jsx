import React from "react";
import styles from "./Projects.module.css";
import Portfolio from "../assets/Portfolio.png";
import Fleet from "../assets/fleetsystem.jpg";
import Student from "../assets/StudentMarks.png";
import Stadium from "../assets/stadium.jpg";
import Login from "../assets/Loginform.jpg";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";



const projects = [
  {id : 1 ,
  title: "Portfolio Website",
  description : "My corner of the internet. Built from scratch to showcase who I am, what I can do, and where I'm headed as a developer.",
  stack : ["React" , "HTML" , "CSS"],
  image : Portfolio,
  live : "/",
  github : "/",

},
{

id : 2,
title : "Fleet vehicle Management System",
description : "Managing vehicles shouldn't be a headache. I built a system that makes tracking, managing and organising a fleet simple, clean and efficient.",
stack : ["Typescript" , "Pagination" ," MySQL" , "ASP.NET" ],
image : Fleet ,
live : "/",
github : "https://github.com/SepatakeTshepo/Fleet-Vehicle-Management.git",


},

{
  id : 3,
  title : "Login Form",
  description :"Every great app starts with a secure door. This project taught me that something as simple as a login form has a lot more going on under the hood than it looks.",
   stack : [ " React" , " Springboot " , "MYSQL" ],
   image : Login ,
   live : "/",
   github : "https://github.com/SepatakeTshepo/Login-form.git",
},

{

  id : 4 ,
  title : "Student Marks Capturing System",
  description : "Every student deserves to know where they stand. This system makes capturing and managing student marks straightforward for educators and transparent for students.",
  stack : ["HTMl" , "CSS " , "Spring boot " , "MYSQL"],
  image : Student,
   live : "/",
   github : "https://github.com/SepatakeTshepo/Login-form.git",
},





]
const Projects = ()  =>{

return (

  <section className = {styles.Container}>


    <div className={styles.heading}>
      <span className= {styles.headingLine}/>
      <h2 className ={styles.title}>My Projects</h2>
      <span className = {styles.headingLine}/>
    </div>

<div className = {styles.subtitle}>
    <p> A selection of Projects ive built - from idea to development</p>

</div>


<div className={styles.list}>
  {projects.map((project,index) => {

const isEven = index % 2 === 0;

return(

  




<div key = {project.id}
  className = {`${styles.card} ${ isEven ? styles.cardNormal : styles.cardReverse }`}
>
  <div className={styles.imageWrapper}>
    <div className = {styles.imageGlow}/>
    <img src={project.image}
    alt={project.title} 
    className={styles.image} 
    onError ={(e) => {e.target.style.display = "none"}} />

<div className={styles.imagePlaceholder}>
  <span>{project.title}</span>

</div>
  </div>

   


  <div className={styles.content}>
<div className={styles.stack}>

  {project.stack.map ((tech) =>(
  <span key ={tech} className = {styles.tag}>{tech} </span>
  ))}


</div>

<h3 className= {styles.projectTitle}>{project.title}  </h3>
<p className= {styles.description}>{project.description}</p>

<div className={styles.buttons}>
  <a 
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.btnLive}
  >
    <FaExternalLinkAlt /> Live Demo
  </a>
  <a 
  
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.btnGithub}
  >
    <FaGithub /> GitHub
  </a>
</div>



  </div>

  <div>




  </div>

</div>


)




  })}





</div>




  </section>
)

}
export default Projects