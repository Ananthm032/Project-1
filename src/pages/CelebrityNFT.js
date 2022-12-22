import React,{useState}from 'react'
import "../Styles/CelebrityNFT.css"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Img from "../components/Images/v795-tang-42b.png"
function CelebrityNFT() {

  const[image,setImage] =useState(null)
  const[fileName,setFileName] =useState("No Selected FIle")

  const[image1,setImage1] =useState(null)
  const[fileName1,setFileName1] =useState( "" )



  
  return (
    <div className='infoPage'>
      <div className='info-top'>
  <form className='form'  action=""
  onClick={ ()=> document.querySelector(".input-field").click()}>
    <input type="file" accept='image/*' className='input-field' hidden style={{width:"200px" , height:"200px",border:"2px solid red"}}

    onChange={({target :{files}})=>{
      files[0] && setFileName(files[0].name)
      if(files){
        setImage(URL.createObjectURL(files[0]))
      }
    }}
/>
  {image ? <img src={image} className="img" alt={fileName}/> : <CloudUploadIcon sx={{scale:"2.3"}}/>}

  </form>
  </div>
  <div className='info-mid'>
<h1>
<form  className='form-1' action=""
  onClick={ ()=> document.querySelector(".input-field1").click()}>
    <input type="file" accept='image/*'  className='input-field1' hidden
    
    onChange={({target :{files}})=>{
      files[0] && setFileName1(files[0].name)
      if(files){
        setImage1(URL.createObjectURL(files[0]))
      }
    }}
/>
  {image ? <img src={image1}  className='img-1'  alt={fileName1}/> : 
""
    } 
  </form>
</h1>
  </div>
    </div>
  )
}

export default CelebrityNFT