import React from 'react'
import "./Topbar.css"
import Logo from "../Images/iyxlogo.png"


function Topbar() {
  return (
    <div className='flex'>
    <header className='header'>
   
   <div className='box'>
   <div>
    <img src={Logo} width="150px" height="40px"></img>
   </div>
  <div ><p>Admin</p>
  </div> 
   </div>
   <div >
    <div>
      <img src='https://cdn3.iconfinder.com/data/icons/user-group-black/100/user-upload-512.png' width="40px" height="40px">
      </img>
    </div>
   </div>
   
  
   </header>
      </div>
  )
}

export default Topbar