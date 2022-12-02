import React from "react"
import SideBar from "../SideBar/SideBar"
import About from "../About/About"
import Experience from "../Experience/Experience"
import Skill from "../Skill/Skill"
import Project from "../Project/Project"
import './App.css'
// import {Link, Route, Routes} from 'react-router-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return(
    <div className="main">
      <SideBar />
      <div className="content">
        <Routes>
        
          <Route path="/" exact element={<About />}></Route>

          <Route path="/experience" element={<Experience />}></Route>

          <Route path="/skill" element={<Skill />}></Route>

          <Route path="/project" element={<Project />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
