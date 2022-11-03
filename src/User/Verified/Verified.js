import React,{useContext} from 'react'
import {Box} from "@mui/material"
import { RoutingContext, pagesMapping } from "../../Content/Routing/Routing"
import "./Verifed.css"
import Boom from '../../Content/Boom/Boom'
function Verified() {
    const{ setPage } = useContext(RoutingContext);
  return (
    <section class="conten">
     
     
    <Box className='min'>
    <Box  className='min1'style={{width:'100%',textDecoration:'none',cursor:'pointer',padding:"15px"}}  onClick={() => setPage(pagesMapping.sidebar)}>
        <p>ForReview</p>
     </Box>
    <Box  className='min2'  style={{width:'100%',textDecoration:'none',cursor:'pointer',padding:"15px"}} >
     <p>Verified</p>
     </Box>
   <Box  className='min3'  style={{width:'100%',textDecoration:'none',cursor:'pointer',padding:"15px"}}  onClick={() => setPage(pagesMapping.mini)}>
     <p>Rejected</p>
     </Box>
     </Box>
     <Box>
    <Boom/>
     </Box>
     </section>
  )
}

export default Verified