import React from 'react'
import "./Sheat3.css"
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import CheckCircle from '@mui/icons-material/CheckCircle'
function Sheat3() {
  
  return (
  <Link to="/user/profile" style={{textDecoration:'none'}} className="no"> <Box className="sheat">
       <Box className="tpsheat">
          <img src="https://wallpapercave.com/wp/WgGibpD.jpg" alt='sht' />
       </Box>
       <Box className='btsheat'>
          <Box className='bat'>
         <Box  className='bit'>crossClub</Box>
         <Box><CheckCircle   sx={{color:'#F5C15F'}}/></Box>
          </Box>
          <Box  className='coin'>Croc#1304</Box>
       </Box>
    </Box>
    </Link> 
  )
}

export default Sheat3