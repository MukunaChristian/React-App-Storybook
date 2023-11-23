import { Button } from "@mantine/core";
import "./FormInput.css";
import { Input} from '@mantine/core'

import React from "react";

const Form = ({ inputValue, setInputValue, handleSubmit }) => {
  return (
    <>
      
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input"
        placeholder={"Type here..."}
      />

  

   
    </>
  );
};

export default Form;
