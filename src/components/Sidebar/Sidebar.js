import React, { useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import HomeIcon from '@mui/icons-material/Home';
import PieChartIcon from '@mui/icons-material/PieChart';
import Person4Icon from '@mui/icons-material/Person4';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from 'react-router-dom';


const Side = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const [menuCollapse, setMenuCollapse] = useState(true)
    const menuIconClick = () => {
     menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<HomeIcon/>
        },
        {
            path:"/analytic",
            name:"Ananlytic",
            icon:<PieChartIcon/>
        },
        {
         path:"/user",
            name:"Users",
            icon:<Person4Icon/>
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
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"> APPLICATION</h1>
                   <div style={{marginLeft: isOpen ? "20px" : "5px"}} className="bars">
                   <div className="closemenu" onClick={menuIconClick}>
            
            {menuCollapse ? (
              <DehazeIcon onClick={toggle}/>
            ) : (
              <CloseIcon onClick={toggle}/>
            )}
          </div>
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