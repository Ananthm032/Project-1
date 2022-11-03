import React from 'react'
import Card from '../Content/Main/Card/Card'
import Select1 from '../Content/Main/Select/Select1/Select1'
import Select2 from '../Content/Main/Select/Select2/Select2'
import "../Styles/About.css"
function About() {
  return (
   
    <section class="tac">
    <div className="cat">
      <div className="yat">
 <div class="items">
<h1>Inocys Members(200)</h1>
 </div>
 <div className="Id">
 <div className="Id-1">
  <Select1/>
 </div>
 <div className="Id-2"><Select2/></div>
 </div>
 </div>
   </div>
   <div className="yan">
  <Card/>
  <Card/>
  <Card/>
  
 </div>
 </section>
  )
}

export default About