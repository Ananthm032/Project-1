import React,{useContext} from 'react'
import ForReview from '../User/ForReview/ForReview'
import Verified from '../User/Verified/Verified'
import Reject from "../User/Reject/Reject"
import {pagesMapping,RoutingContext} from "../Content/Routing/Routing"
function Dashboard() {
  const { page } = useContext(RoutingContext)
  return (
    <div>
   {(pagesMapping.sidebar === page) && <ForReview />}
      {(pagesMapping.largeside === page) && <Verified />}
      {(pagesMapping.mini=== page) && <Reject />}
    </div>
   
  )
}

export default Dashboard