import React from 'react'
import {Box, Button} from "@mui/material"
import Img5 from "../../../components/Images/iyxlogo.png"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./Card.css"
function Card() {
  return (
   <a href='./users/address' style={{textDecoration:'none',textDecorationColor:'none'}}>
    
     <Box className="card">
      <Box className='ver'>
        <Box className="lag">
        <img src={Img5} alt="src" width="100" height="100"  ></img>
        </Box>
        <Button sx={{width:80,height:24,background:'#FFF5CE',borderRadius:40}}><p className='p'>Artist</p></Button>
        <Box className='Creatername'>
          <Box className='name'>
            Jevanantham
          </Box>
          <Box className='simble'>
          <CheckCircleIcon />
          </Box>
        </Box>
        <Box class="metic">1m Metic valume</Box>
        <Box className="bm">
       <Box class="rating">Ratings:4.8</Box>
       <Box class="create">Creations:10</Box>
        </Box>
      </Box>
    </Box>
   
    </a>
  )
}

export default Card