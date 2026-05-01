import { useState } from "react"
import styles from "./Navbar.module.css"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () =>{

    const [menuOpen , setMenuOpen ] = useState (false)

return (
 <>
   <nav className = {styles.Navbar}>

  
    <Link to="/" className={styles.logo}>
    <span className={styles.highlight}>S</span>epatake
    
    </Link>

    
    <ul className={ styles.navlinks}>
        <li> <NavLink to =  "home" className={({isActive})=> isActive ? styles.active : ""}>Home</NavLink></li>
        <li> <NavLink to =  "about" className={({isActive})=> isActive ? styles.active : ""}>About</NavLink></li>
        <li> <NavLink to =  "projects" className={({isActive})=> isActive ? styles.active : "" }>Projects</NavLink></li>
         <li> <NavLink to =  "contact" className={({isActive})=> isActive ? styles.active : ""}>Contacts</NavLink></li>


    </ul>



 <button className = {styles.hamburger}
    onClick = {() => setMenuOpen (!menuOpen)}
    aria-label = "Toggle menu"
>

    <span />
 <span />
<span />
 </button>

   </nav>


<div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <NavLink to="/"         onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about"    onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/contact"  onClick={() => setMenuOpen(false)}>Contacts</NavLink>
      </div>

 </>


)
}

export default Navbar