import React,{useState} from 'react'
import { useQuery, gql } from "@apollo/client";
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Box, Button} from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import Img from "../components/Images/anime cartton.png"
import "../Styles/UserPage.css"

const HELL_QUERY = gql`
  {
    getAllUsers{
      displayName
      userID
      username
      id
      profilePic
      walletAddress
      ratings
      totalFollowers
    }
    
   
  }
`;




function About() {

 
 
  const [category, setcategory] = React.useState('');
   const [user, setData] = useState(Object);
   const [term, setTerm] = useState("");
  
  const handleChange = (event) => {
    setcategory(event.target.value);

  };
  const   {data,loading,error}   = useQuery(HELL_QUERY); 
    console.log(data,loading,error,"page")
    const apiEndpoint = "https://api2.inocyx.com/graphql/";
    const query = `
      query SearchUsers($displayName:String!){
          searchUsers(displayName:$displayName){
            displayName
            userID
            id
             profilePic
             walletAddress
             ratings
             totalFollowers
          }
        }
      `;
  
    const getData = (displayName) => {
      fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          variables: { displayName }
        })
      })
        .then((res) => res.json())
        .then((user) => setData(user))
        
    };
  
   
    const onChange = (e) =>{
        setTerm(e.target.value)
    }
    const onSearch = () =>{
        getData(term)
    }
    console.log("search", user,error);
   
  return (
   
    <section className="tac">
 
      <div className="yat">
 <div className="items">
 <div>
<h1>Inocyx Members(201)</h1>
</div>
<div className="searchbar">
<div className='select-1'>

<Select
         className='Aep'
          value={category}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem value={""}>displayName</MenuItem>
          <MenuItem value={"userID"}>userID</MenuItem>
          <MenuItem value={"walletaddress"}>walletaddress</MenuItem>
        </Select>
  </div>
 
  <div  className='search-box'>
     <input 
            className='search-txt'
            placeholder="Search..."
            type="text" 
            value={term}
            onChange={(event) => {onChange(event)}}
           
        />
        <p  className="search-btn" 
                onClick={onSearch}>  
                <SearchIcon />

        </p>
     </div>
 
 </div>
 </div>
 </div>
  
   <div className="yan">
  
   {user.data ? (
        user.data?.searchUsers?.map((Page) => ( 
          <Link to={`/user/address/${Page.walletAddress}`} key={Page.id}> 
           <Box className="card">
      <Box className='ver'>
       <Box className="lag">

        {Page.profilePic ? 
       <img src={Page.profilePic}  width="100" height="100" alt=''></img>
       : <img src={Img} width="100" height="100" alt=''/>
        }
       </Box>
       <Button sx={{width:80,height:24,background:'#FFF5CE',borderRadius:40}}><p className='p'>ARTIST</p></Button>
       <Box className='Creatername'>
         <Box className='name'>
         
         
          <Box>{Page.displayName}</Box>
          
         </Box>
         <Box className='simble'>
         <CheckCircleIcon />
         </Box>
       </Box>
      
         <Box className="bm">
             <Box className="rating">4.8 rating</Box>
             <Box className="create">Followers</Box>
          </Box>
        </Box>
     </Box> </Link>
        ))
      ) : (
        <div className="yan">
          {data?.getAllUsers?.map((Page)=>{
        
  return  (  
    <Link to={`/user/address/${Page.walletAddress}`} key={Page.id}> 
    <Box className="card">
      <Box className='ver'>
       <Box className="lag">
    
       {Page.profilePic ? 
       <img src={Page.profilePic}  width="100" height="100" alt=''></img>
       : <img src={Img} width="100" height="100" alt=''/>
        }
       </Box>
       <Button sx={{width:80,height:24,background:'#FFF5CE',borderRadius:40}}><p className='p'>ARTIST</p></Button>
       <Box className='Creatername'>
         <Box className='name'>
         
         
          <Box>{Page.displayName}</Box>
          
         </Box>
         <Box className='simble'>
         <CheckCircleIcon />
         </Box>
       </Box>
      
         <Box className="bm">
             <Box className="rating">4.8 rating</Box>
             <Box className="create">Followers</Box>
          </Box>
        </Box>
     </Box>
    </Link>

  ) 
 })}
        </div>
      )}
</div>

 </section>
  )
}

export default About


