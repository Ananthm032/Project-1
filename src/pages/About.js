import React from 'react'
import {Link} from "react-router-dom"
import Select1 from '../Content/Main/Select/Select1/Select1'
import Select2 from '../Content/Main/Select/Select2/Select2'
import "../Styles/About.css"
import { useQuery, gql } from "@apollo/client";
import Card from '../Content/Main/Card/Card';





const HELL_QUERY = gql`
  {
    getAllUsers{
      displayName
      userID
      username
      id
    }
    
   
  }
`;

function About() {
  const { data, loading, error } = useQuery(HELL_QUERY);

  console.log("about",data,loading,error)
  return (
   
    <section class="tac">
    <div className="cat">
      <div className="yat">
 <div class="items">
 
<h1>Inocys Members(201)</h1>

 </div>
 <div className="Id">
 <div className="Id-1">

 <Select1/>
 </div>
 <div className="Id-2">
 <Select2 />
  </div>
 </div>
 </div>
   </div>
   <div className="yan">
  
 {data?.getAllUsers?.map((user)=>{
  return  <Link to={`/user/address/${user.userID}`} style={{textDecoration:'none',textDecorationColor:'none'}}> <Card user={user} /> </Link>

 
 })}

</div>

 </section>
  )
}

export default About