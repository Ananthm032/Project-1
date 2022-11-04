import React, { useState } from 'react';
import AccessibilityNew from "@mui/icons-material/AccessibilityNew";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from 'react-router-dom';


const Side = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<AccessibilityNew/>
        },
        {
            path:"/analytic",
            name:"Ananlytic",
            icon:<AccountBoxIcon/>
        },
        {
         path:"/user",
            name:"Users",
            icon:<AccountCircleIcon/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<AddBoxIcon/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<AddIcCallIcon/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<AddShoppingCartIcon/>
        }
    ]
    return (
        <div className="container">
           <div   style={{width: isOpen ? "250px" : "50px"}}  className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"> Application</h1>
                   <div style={{marginLeft: isOpen ? "20px" : "5px"}} className="bars">
                       <AddShoppingCartIcon onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="links" >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Side;