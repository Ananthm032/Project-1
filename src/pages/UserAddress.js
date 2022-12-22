import React from 'react'
import {Box} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useParams } from 'react-router-dom'
import UseCharacter from '../Content/Hook/UseCharacter'
import CheckCircle from '@mui/icons-material/CheckCircle'
import Img from "../components/Images/Verified-1.png"
import Img1 from "../components/Images/anime cartton.png"
import Img2 from "../components/Images/Background.png"
import "../Styles/UserAddress.css"
function UserAddress() {

  const {walletAddress}= useParams()

  const {data,loading,error} =UseCharacter(walletAddress)

  if (error) return <div>something went Wrong</div>
  if (loading) return <div className="slider">
  {loading? <div className="slide active">
    <div className="panel">
      <div className="top" ></div>
      <div className="bottom"></div>
    </div>
    <div className="center">
    <div id="loader">
  <div id="shadow"></div>
  <div id="box"></div>
</div>
    </div>
  </div>:
 <div className="slide">
 <div className="panel">
   <div className="top" ></div>
   <div className="bottom"></div>
 </div>
 
</div>
   }

 </div>

  console.log(data)
  return (
  
           <div className="address" >
          <div className="ttp">
   <Box className="total1">
{data?.getUser?.banner ? 
   <img src={data?.getUser?.banner} className="back" alt=""/>
       :   <img src={Img2}  alt="" className="back"/>

}
    <Box className="tpp-1">
      <Box className="password">
    <Link to='/user'><KeyboardBackspaceIcon sx={{color:'whitesmoke'}} /></Link>
      </Box>
    
    </Box>
    <Box className="btt-1">
       <Box className="boat1">
          <Box className="bv">
            {data?.getUser?.profilePic ? 
          <img src= {data?.getUser?.profilePic} alt='' />
          :<img src={Img1} alt=""/>
            }
         </Box>
         <Box className="bv-1">
          <Box className='bv-11'>
          <Box className='bv-0'>
         <Box  className="bv-111">
 {data?.getUser?.displayName}
         </Box>
        <Box className='bv-110'> 
       <div>
   {data?.getUser?.isKYCVerified === true ?
  <div>
<img src= {Img} width="25px" height="25px" alt=''></img>
    </div>
  :null
  }
   </div>
        </Box>
         </Box>
         <Box className="bv-112">
         {data?.getUser?.username}
     
          </Box>
         </Box>
         <Box className='bv12'>

        <Box className="bv121">
         <Box>4.8</Box>
         
         <Box>
          
         <StarIcon sx={{color:'#ffa726',fontSize:16}}/>
         <StarIcon sx={{color:'#ffa726',fontSize:16}}/>
         <StarIcon sx={{color:'#ffa726',fontSize:16}}/>
         <StarIcon sx={{color:'#ffa726',fontSize:16}}/>
         <StarHalfIcon sx={{color:'#ffa726',fontSize:16}}/>
          
          </Box>
         </Box>
          <Box sx={{fontSize:16,fontWeight:400}}>
          {data?.getUser?.shortBio}
          </Box>
          </Box>
         </Box>
       </Box>
       <Box className="boat-1">
        <Box className='social'><a href={data?.getUser?.facebook} target="blank"><FacebookIcon/></a></Box>
        <Box className='social'><a href={data?.getUser?.instagram} target="blank"><InstagramIcon/></a></Box>
         <Box className='social'><a href={data?.getUser?.twitter} target="blank"><TwitterIcon/></a></Box>
        <Box className='social'><a href={data?.getUser?.linkedIn} target="blank"><LinkedInIcon/></a></Box>
        </Box>
          </Box>
              </Box>

  </div>
  <div className="bto">
  <div className='lowe1'>
    <div className="wrapper">
      <input type="radio" name="select" id="one" checked/>
      <input type="radio" name="select" id="two"/>
      <label for="one" className="option option-1">
        <span>Create</span>
      </label>
      <label for="two" className="option option-2">
        <span>Owned</span>
      </label>
    </div>
          </div>
    <div className='botm2' >
      
     {data?.getUser?.allNFTs?.map(nft=>{
      return(
        <div >
          
          <Box className="sheat">
       <Box className="tpsheat">
          <img src={nft.itemImage} alt='sht' />
       </Box>
       <Box className='btsheat'>
          <Box className='bat'>
         <Box  className='bit'>{nft.itemName}</Box>
         <Box><CheckCircle   sx={{color:'#F5C15F'}}/></Box>
          </Box>
          <Box  className='coin'>{nft.collectionID}</Box>
       </Box>
    </Box>
 
    </div>

      )
     })}  
           
       </div>
    </div>
  </div>
  )
}
  


export default UserAddress
