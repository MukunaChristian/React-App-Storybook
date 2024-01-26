import "./FormInput.css";

import React from "react";
import { Autocomplete, Input, Stack, TextField } from '@mui/material';

const Form = ({ inputValue, setInputValue, handleSubmit }) => {
  return (
    <>
      
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input"
        placeholder={"Type here..."}
      />

  

   
    </>
  );
};

export default Form;
