import React from 'react'
import {Box, Button} from "@mui/material"
import Img5 from "../../../components/Images/anime cartton.png"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./Card.css";

function Card(props) {
  
  return (
     
    <Box className="card">
      <Box className='ver'>
       <Box className="lag">
       <img src={Img5} alt="src" width="100" height="100"></img>
       </Box>
       <Button sx={{width:80,height:24,background:'#FFF5CE',borderRadius:40}}><p className='p'>ARTIST</p></Button>
       <Box className='Creatername'>
         <Box className='name'>
         
         
          <Box>{props.user.displayName}</Box>
          
         </Box>
         <Box className='simble'>
         <CheckCircleIcon />
         </Box>
       </Box>
      
         <Box className="bm">
             <Box class="rating">4.8 rating</Box>
             <Box class="create">Followers</Box>
          </Box>
        </Box>
     </Box>
  
  )
}

export default Card