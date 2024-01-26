import React, { useState } from "react";
import { Header } from "../Header/Header";
import FormInput from "../FomInput/FormInput";
import Title from "../Title/Tite";
import Button from "../Button/Button";
import { page } from "../page/page.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Alert } from "@mui/material";
import Card from '@mui/material/Card';

export const Page = () => {
  const [label] = useState("LogIn");
  const [myName] = useState("Welcome Metalogix Solutions");
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const handleInputChange = (fieldName, value) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // You can perform actions with the input values here, e.g., make an API call.
    console.log("Form submitted with values:", inputValues);

    // Show alert message
    setShowAlert(true);

    // Reset input values
    setInputValues({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
      <><Header />
      <Card style={{ width: "50em" , margin:"auto", marginTop:"5em"}}>

      <section className="storybook-page">
        <h2>WHO WE ARE</h2>
        <p>
          <strong>
            <a
              href="https://metalogix.solutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bespoke Software Solution Design
            </a>
          </strong>
        </p>
        <p>
          Metalogix specializes in developing and supporting bespoke software
          for businesses of all sizes. We have a team of experienced developers
          who are skilled in using the latest technologies. We always strive to
          find more efficient ways to deliver solutions using proven
          technologies.
        </p>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <form className="input" onSubmit={handleFormSubmit}>
          <FormInput
            setInputValue={(value) => handleInputChange("name", value)}
            placeholder={"Enter your name"}
            value={inputValues.name} />
          <FormInput
            setInputValue={(value) => handleInputChange("email", value)}
            placeholder="Enter your email"
            value={inputValues.email} />
          <FormInput
            setInputValue={(value) => handleInputChange("password", value)}
            type="password"
            placeholder="Enter your password"
            value={inputValues.password} />

          <Button
            className="btn"
            label={"Log In"}
            style={{ marginTop: "10px" }}
            type="submit" />
        </form>
        {showAlert && (
          <Alert severity="success" onClose={() => setShowAlert(false)}>
            Form submitted successfully!
          </Alert>
        )}
      </div>
    </Card></>
  );
};
