import React, { useState } from 'react';
import Select from "react-select"
import "./Select1.css"

function Select1() {
 
  const data = [
    {
      value: 1,
      label: "UserID"
    },
    {
      value: 2,
      label: "WalletAddress"
    },
    {
      value: 3,
      label: "DisplayName"
    },
    
  
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = e => {
    setSelectedOption(e);
  }

  const ColorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "transparent" }),
    option: (styles, { data }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        
        color: "#fff",
      };
    },
    multiValueLabel: (styles, { data }) => {
        return {
          ...styles,
          color: "#fff",
        };
      },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        
        ":hover": {
          color: "#fff",
        },
      };
    },
  };

  
  return (
    <div >
     
     

  
      <Select
       className="App"
        placeholder="UserID"
        value={selectedOption} 
        options={data} 
        onChange={handleChange}
        styles={ColorStyles}
        />
      
      

    </div>
  );
}

export default Select1;