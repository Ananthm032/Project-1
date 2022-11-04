import React from 'react'
import "./Sheat.css"
import { Box } from '@mui/material'

import CheckCircle from '@mui/icons-material/CheckCircle'
function Sheat() {
  return (
  <a href="/user/profile" style={{textDecoration:'none'}}> <Box className="sheat">
       <Box className="tpsheat">
          <img src="https://wallpapercave.com/wp/WgGibpD.jpg" alt='sht' />
       </Box>
       <Box className='btsheat'>
          <Box className='bat'>
         <Box  className='bit'> Cros Club </Box>
         <Box><CheckCircle   sx={{color:'#F5C15F'}}/></Box>
          </Box>
          <Box  className='coin'>Croc#1304</Box>
       </Box>
    </Box>
    </a> 
  )
}

export default Sheat