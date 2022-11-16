import React from 'react'
import "./Sheat2.css"
import {Box} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FacebookIcon from '@mui/icons-material/Facebook';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link} from "react-router-dom"



function Sheat2(props) {
  
  return (  
   <Box className="total"> 
   

   
    <Box className="backi">
     <Box className="tpp" >
     
      <Box className="password">
     
       <Link to={"/user/address/useraddress"}><KeyboardBackspaceIcon sx={{color:'whitesmoke'}}/></Link> 
    
      </Box>
   
    </Box>
    <Box className="btt">
       <Box className="boat">
          <Box className="bv">
           <img src="https://pre00.deviantart.net/27d4/th/pre/i/2013/202/1/7/aqua___realm_of_darkness_by_arxami-d6egi5y.jpg" alt='nam' width="100" height="100" />
         </Box>
         <Box className="bv1">
          <Box className='bv11'>
          <Box className='bv011'>
          <Box  className="bv111">Jevanantham</Box>
        <Box className='bv112'>ARTIST</Box>
         
         </Box>
         <Box sx={{fontSize:18,color:'white'}}>@jeva</Box>
         </Box>
         <Box className='bv12'>

        <Box className="bv121">
         <Box>4.8</Box>
         
         <Box>
          
         <StarIcon sx={{color:'#ffa726',fontSize:16}}/>
         <StarIcon sx={{color:'#ffa726',fontSize:16}}/>
         <StarIcon sx={{color:'#ffa726',fontSize:16}}/>
         <StarIcon sx={{color:'#ffa726',fontSize:16}}/>
         <StarHalfIcon sx={{color:'#ffa726',fontSize:16}}/>
          
          </Box>
         </Box>
          <Box sx={{fontSize:16,fontWeight:400}}>
         After Writing the basic strlso, after that  a bro After Writing the basic strlso, after that  a browser and see the output.
          </Box>
          </Box>
         </Box>
       </Box>
       <Box className="boat11">
        <Box className='social'><FacebookIcon /></Box>
        <Box className='social'><InstagramIcon/></Box>
        <Box className='social'><TwitterIcon/></Box>
        <Box className='social'><LinkedInIcon/></Box>
        </Box>
   
          </Box>
             
            </Box>
   
              </Box>
  )
}

export default Sheat2