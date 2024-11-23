import React from 'react'
import SideBar from '../sideBar/SideBar'
import "./menubar.css"


const MenuBar = () => {

  return (
    <div className='menu-bar'> 
        <div className='sidebar-button'><SideBar/></div>
        <div className='menu-search-input'>
           search
        </div>
        <div className='menu-account'>
            <div className='account-name'>admin</div>
            <div className='account-profile'>profile pic</div>
        </div>
        <div className='message-icon'>message icon</div>
        
    </div>
  )
}

export default MenuBar