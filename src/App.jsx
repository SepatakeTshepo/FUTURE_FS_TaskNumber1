import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home     from './Pages/Hero'
import About    from './Pages/About'
import Projects from './Pages/Projects'
import Contact  from './Pages/Contacts'
import Navbar   from './Components/Navbar'
import Footer   from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/about"    element={<About />}    />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact"  element={<Contact />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App