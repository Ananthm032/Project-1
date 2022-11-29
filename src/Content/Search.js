import React,{useState} from 'react'

function Search({handleSubmit}) {
    const [user, setUsers] = useState('')
    const handleUsers = (event) => {
        setUsers(event.target.value);
    }
  return (
    <div>
        <input 
            placeholder="Enter the name..."
            type="text" 
            onChange={handleUsers}
           
        />
        <button type="button" className="searchButton" 
               onClick={() => handleSubmit(user)}>Search
        </button>
    </div>
  )
}

export default Search