import React,{useState} from 'react'
import { useQuery, gql } from "@apollo/client";
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Box, Button} from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
    console.log(data,loading,error)
    const apiEndpoint = "https://api2.inocyx.com/graphql/";
    const query = `
      query SearchUsers($displayName:String!){
          searchUsers(displayName:$displayName){
            displayName
            userID
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
        .catch(console.error);
    };
  
   
    const onChange = (e) =>{
        setTerm(e.target.value)
    }
    const onSearch = () =>{
        getData(term)
    }
    console.log("search", user);
   
  return (
   
    <section class="tac">
 
      <div className="yat">
 <div class="items">
 <div>
<h1>Inocyx Members(201)</h1>
</div>
<div className="searchbar">
<div className='select-1'>

<Select
         className='App'
          value={category}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
         
          <MenuItem value={"userID"}>userID</MenuItem>
          <MenuItem value={""}>displayName</MenuItem>
          <MenuItem value={"walletaddress"}>walletaddress</MenuItem>
        </Select>
  </div>
  <div>
  <>
     <input 
            placeholder="Enter the name..."
            type="text" 
            value={term}
            onChange={(event) => {onChange(event)}}
           
        />
        <button type="button" className="searchButton" 
                onClick={onSearch}>Search
        </button>
     </>
    </div>
 </div>
 </div>
 </div>
  
   <div className="yan">
  
   {user.data ? (
        user.data?.searchUsers?.map((Page) => ( 
          <Link to={`/user/address/${Page.walletAddress}`}> 
           <Box className="card">
      <Box className='ver'>
       <Box className="lag">
       <img src={Page.profilePic}  width="100" height="100" ></img>
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
             <Box class="rating">4.8 rating</Box>
             <Box class="create">Followers</Box>
          </Box>
        </Box>
     </Box> </Link>
        ))
      ) : (
        <div className="yan">
          {data?.getAllUsers?.map((Page,index)=>{
        
  return  (  
    <Link to={`/user/address/${Page.walletAddress}`}> 
    <Box className="card">
      <Box className='ver'>
       <Box className="lag">
       <img src={Page.profilePic}  width="100" height="100" ></img>
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
             <Box class="rating">4.8 rating</Box>
             <Box class="create">Followers</Box>
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


