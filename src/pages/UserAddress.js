import React from 'react'
import Sheat from '../Content/Sheat/Sheat/Sheat'
import Sheat1 from '../Content/Sheat/Sheat1/Sheat1'
import "../Styles/UserAddress.css"
import { useQuery,gql } from '@apollo/client';

const JIO_QUERY = gql `
{
  getAllUsers{
    displayName
    userID
    username
    id
    shortBio
  }
}

`

function UserAddress() {
   
  const { data, loading, error } = useQuery(JIO_QUERY);
  console.log("useraddress",data,loading,error)

  
  return (
           <div>
            
           <div className="address" >
           <div className="ttp">


  <Sheat1>{}</Sheat1>

  </div>
 
    <div className='botm2'>

    {data?.getAllUsers?.map((user) =>{
        return   <Sheat user={user}></Sheat>

    })}

      </div>
       
    </div>
  </div>
  )
}

export default UserAddress;
