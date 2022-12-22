import React,{useContext} from 'react'
import {Box} from "@mui/material"
import Bax from "../../Content/Box/Box"
import { RoutingContext, pagesMapping } from "../../Content/Routing/Routing"
import "./Reject.css"
function Reject() {
    const{ setPage } = useContext(RoutingContext);
  return (
    <section className="conte">
     
    <Box className='mi'>
   <Box className='mi1'  style={{width:'100%',textDecoration:'none',cursor:'pointer',padding:"15px"}} onClick={() => setPage(pagesMapping.sidebar)} >
        <p>ForReview</p>
     </Box>
   <Box className='mi2' style={{width:'100%',textDecoration:'none',cursor:'pointer',padding:"15px"}} onClick={() => setPage(pagesMapping.largeside)}>
     <p>Verified</p>
     </Box>
   <Box className='mi3' style={{width:'100%',textDecoration:'none',cursor:'pointer',padding:"15px"}}>
     <p>Rejected</p>
     </Box>
     </Box>
     <Box>
       <Bax/>
     </Box>
     </section>
  )
}

export default Reject