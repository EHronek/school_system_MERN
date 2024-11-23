import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "primereact/button"



import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';                  // Core CSS
import 'primeicons/primeicons.css';                               // Icons
import 'primeflex/primeflex.css';                                 // Flex utility


import MenuBar from './components/menubar/MenuBar'
import SideBar from './components/sideBar/SideBar'
import HeadlessDemo from './components/sideBar/SideBar'
import StudentRegForm from './components/student/StudentRegForm'
        

const App = () =>{
 
  return (

    <div className='app'>
      <div className='menu-bar'><MenuBar/></div>
      <div className='body'>
        <StudentRegForm/>
        
        
      </div>
    </div>
      
    
  )
}

export default App
