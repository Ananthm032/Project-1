import React from 'react'
import "./Sheat1.css"

import {Box} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FacebookIcon from '@mui/icons-material/Facebook';

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Sheat1() {

  return (
   <Box className="total1">
    <Box className="backi1">
    <Box className="tpp-1" >
      <Box className="password">
    <a href='/user'><KeyboardBackspaceIcon sx={{color:'whitesmoke'}} /></a>
      </Box>
    
    </Box>
    <Box className="btt-1">
       <Box className="boat1">
          <Box className="bv">
           <img src="https://pre00.deviantart.net/27d4/th/pre/i/2013/202/1/7/aqua___realm_of_darkness_by_arxami-d6egi5y.jpg" alt='nam'  />
         </Box>
         <Box className="bv-1">
          <Box className='bv-11'>
            
           <Box>
         <Box  className="bv-111">Jevanantham</Box>
        
          
         </Box>
         <Box className="bv-112">@jeva132</Box>
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
       <Box className="boat-1">
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

export default Sheat1