import React, { useEffect, useState, useRef } from 'react'
import styles from './About.module.css'
import { FaJava, FaPython, FaNodeJs, FaGithub, FaDatabase, FaJs, FaReact, FaGit, FaAngular } from 'react-icons/fa'
import { SiMysql, SiSpringboot, SiTypescript } from 'react-icons/si'
import { SiDotnet } from "react-icons/si" // .NET icon ✅
const skills = [

{icon : <FaJava/> ,name : "Java"},
{icon : <SiSpringboot/> , name : "SpringBoot"},
{icon : <FaJs/> ,name : "Javscript"},
{icon : <FaReact/> , name : "React"},
{icon : <SiDotnet/> , name : "ASP.net"},
{icon : <FaGit/> , name : "Git"},
 { icon: <SiMysql />,      name: 'MySQL' },
 { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <FaAngular />,    name: 'Angular 21' },
  { icon: <FaGithub/>,     name: 'GitHub' },
]

const fullBio = " I'm Tshepo Sepatake — a Computer Science student at the University of Venda, Limpopo. I stumbled into software development chasing solutions to problems I couldn't ignore. What started as curiosity became a craft, and that craft grew into a full-stack mindset. I build across the entire stack — from the logic and architecture on the backend to the interfaces people actually interact with on the frontend. I measure my work by one standard — does it solve the problem or not?  " ;

const statsData = [


  {target : 6 , suffix : "+" , label : "Projects built"},
  {target : 2 , suffix : "" , label : "Year CS Student "},
  {target : 5 , suffix : "+" , label : "Languages"},
]

const About = () => {

const [ visible , setVisible ] = useState(false)
const [ bioText , setBioText] =useState('')
const [counts ,setCounts] = useState ([0,0,0])
const bioIndex = useRef (0)

//fade in

useEffect (() => {

  setTimeout (() => setVisible (true) , 100)
} , [])


// typewriter bio
useEffect(() => {

const interval = setInterval (() => {

if (bioIndex.current < fullBio.length){


  setBioText(fullBio.slice (0 , bioIndex.current + 1))
  bioIndex.current ++
}else {

  clearInterval (interval)
}



} , 30)

return () => clearInterval (interval)
}
, []
)


// count up stats

useEffect (() => {


  const duration = 1500
  const steps = 50
  const interval = duration/steps

  let step = 0
  const timer =setInterval (() =>{


 step++
      const progress = step / steps
      setCounts(statsData.map(s => Math.min(Math.round(s.target * progress), s.target)))
      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)

  } , [])

return (
 <div className= {`${styles.Container} ${visible ? styles.visible : ''}`}>
<div className={styles.scanLine}/>


<div className={styles.bolb}/>

<div className = {styles.heading }>
  <span className={styles.headingLine}/>
  <h2 className={styles.title}> <span className={styles.color}> A</span>bout Me</h2>

</div>

 <div className={styles.content}>

        {/* left — bio */}
        <div className={styles.bio}>
          <p className={styles.greeting}>
            <span className={styles.dash} /> Who I am
          </p>

          <h3 className={styles.bioTitle}>
            Software Developer &<br />
            <span className={styles.highlight}>CS Student</span>
          </h3>

          {/* typewriter bio */}
          <p className={styles.bioText}>
            {bioText}
            <span className={styles.cursor}>|</span>
          </p>

          {/* count up stats */}
          <div className={styles.stats}>
            {statsData.map((s, i) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>
                  {counts[i]}{s.suffix}
                </span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* right — skills */}
        <div className={styles.skillsWrapper}>
          <p className={styles.skillsTitle}>Tech Stack</p>
          <div className={styles.skills}>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <span className={styles.skillIcon}>{skill.icon}</span>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}

export default About




