import React from 'react'

import Sheat1 from '../Content/Sheat/Sheat1/Sheat1'
import "../Styles/UserAddress.css"
import { useLazyQuery,gql } from '@apollo/client';
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import CheckCircle from '@mui/icons-material/CheckCircle'
import Sheat from '../Content/Sheat/Sheat/Sheat';
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
   
  const { data, loading, error } = useLazyQuery(JIO_QUERY);
  console.log("useraddress",data,loading,error)

  
  return (
           <div>
            
           <div className="address" >
           <div className="ttp">


  <Sheat1/>

  </div>
 
    <div className='botm2' >
<Sheat/>
      </div>
        
    </div>
  
  </div>
  )
}

export default UserAddress;
