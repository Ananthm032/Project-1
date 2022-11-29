import React from 'react'
import Sheat2 from '../Content/Sheat/Sheat2/Sheat2'
import Sheat3 from '../Content/Sheat/Sheat3/Sheat3'
import "../Styles/UserProfile.css"


function UserProfile() {



  return (
    <div className="address1">
    <div className="ttp1">
   
<Sheat2/>
    </div>
    <div className='lowe1'>
    <div class="wrapper">
      <input type="radio" name="select" id="one" checked/>
      <input type="radio" name="select" id="two"/>
      <label for="one" class="option option-1">
        <span>Create</span>
      </label>
      <label for="two" class="option option-2">
        <span>Owned</span>
      </label>
    </div>
          </div>
    <div className='botm1'>
   
 <Sheat3/>
 <Sheat3/>    
 <Sheat3/>
 <Sheat3/>
    </div>
  </div>
  )
}

export default UserProfile