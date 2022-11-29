import React,{useState} from 'react'
import {Link} from "react-router-dom"
import "../Styles/UserPage.css"
import Card from '../Content/Main/Card/Card';
import { useQuery, gql } from "@apollo/client";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"userID"}>userID</MenuItem>
          <MenuItem value={"displayName"}>displayName</MenuItem>
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
        user.data?.searchUsers?.map((user ) => (
            <Link to={`/user/address/${user.userID}`}> <Card user={user}/>  </Link>
        ))
      ) : (
        <div className="yan">
          {data?.getAllUsers?.map((user)=>{
  return  <Link to={`/user/address/${user.userID}`} style={{textDecoration:'none',textDecorationColor:'none'}}> <Card user={user} /> </Link>
 })}
        </div>
      )}



 

</div>

 </section>
  )
}

export default About


