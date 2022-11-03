import React,{useContext} from 'react'
import {Box} from "@mui/material"
import Band from "../../Content/Band/Band"
import { RoutingContext, pagesMapping } from "../../Content/Routing/Routing"
import "./ForReview.css"
function ForReview() {
    const{ setPage } = useContext(RoutingContext);
  return (
    <section class="content">
    
    <Box className='mini'>
<Box   className='mini1' style={{width:'100%',textDecoration:'none',cursor:'pointer',padding:"15px"}} >
    <p>ForReview</p>
 </Box>
 <Box className='mini2' style={{width:'100%',textDecoration:'none',cursor:'pointer',padding:"15px"}} onClick={() => setPage(pagesMapping.largeside)}>
 <p>Verified</p>
 </Box>
<Box className='mini3' style={{width:'100%',textDecoration:'none',cursor:'pointer',padding:"15px"}} onClick={() => setPage(pagesMapping.mini)}>
 <p>Rejected</p>
 </Box>
 </Box>

 <Box>
   <Band/>
 </Box>

 </section>
  )
}

export default ForReview