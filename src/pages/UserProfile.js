import React from 'react'
import Sheat2 from '../Content/Sheat/Sheat2/Sheat2'
import Sheat3 from '../Content/Sheat/Sheat3/Sheat3'
import "../Styles/UserProfile.css"
import { useQuery, gql } from "@apollo/client";
import { useParams } from 'react-router-dom';
const JIO_QUERY = gql`
  {
    getAllUsers{
      username
      displayName
      userID
      id
      totalFollowers
    }
  }
`;


function UserProfile() {
  const { data, loading, error } = useQuery(JIO_QUERY);
  console.log("useraddress",data,loading,error)
  const  Params =useParams()
  const  userID =Params.userID
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
    {data?.getAllUsers?.map((user)=>{
  return <Sheat3 user={user}>
    {userID}
    </Sheat3>
 })}
      
    </div>
  </div>
  )
}

export default UserProfile