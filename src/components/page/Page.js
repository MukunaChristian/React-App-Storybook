import React, { useState } from "react";
import { Header } from "../Header/Header";
import FormInput from "../FomInput/FormInput";
import Title from "../Title/Tite";

import Button from "../Button/Button";

import { page } from "../page/page.css";

export const Page = () => {
  const [label] = useState("LogIn");
  const [myName] = useState("Welcome Metalogix Solutions");
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <article>
      <Header />

      <section className="storybook-page">
        <h2>WHO WE ARE</h2>
        <p>
          <strong>
            <a
              href="https://componentdriven.org"
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
        <Title myName={myName} />

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
            gap:'1rem'
          }}
        >
          <FormInput
            setInputValue={setInputValue}
            placeholder="Enter your username"
          />
          <FormInput
            setInputValue={setInputValue}
            placeholder="Enter your email"
          />
          <FormInput
            setInputValue={setInputValue}
            type="password"
            placeholder="Enter your password"
          />
          <Button label={label} style={{ marginTop: "10px" }} />
        </form>
      </div>
    </article>
  );
};

