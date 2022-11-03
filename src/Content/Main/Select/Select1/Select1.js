import React, { useState } from 'react';
import Select from "react-select"
import "./Select1.css"
function Select1() {
  const data = [
    {
      value: 1,
      label: "UserId"
    },
    {
      value: 2,
      label: "UserId1"
    },
    {
      value: 3,
      label: "UserId2"
    },
    {
      value: 4,
      label: "UserId3"
    },
    {
      value: 5,
      label: "UserId4"
    },
    {
      value: 6,
      label: "UserId5"
    }
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