import React, { useState } from "react";
import Todo from "../Todo/Todo";
import FormInput from "../FomInput/FormInput";
import Button from "../Button/Button";
import Title from "../Title/Tite";
import { Header } from "../Header/Header";

const TodoList = () => {
  const [label1] = useState("Metalogix Solutions")
  const [label] = useState("submit")
  const [myName] = useState("Metalogix Solution");
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    if (inputValue === "") return;
    const newTodo = { id: Date.now(), text: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
        <Header label={label1} />
    <div >
     <article>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Title myName={myName} />
      </div>
      <div style={{ justifyContent: "center", display: "flex", alignItems:"center", gap:"-0px" }}>
        <div>
        <FormInput
      
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
        />
        </div>
        <div>
          <Button
           style={{
            backgroundColor:'#B197FC',
          }}
          variant="outline"
          backgroundColor='#B197FC'
          label={label}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <div
        style={{

          boxShadow: "500%",
          backgroundColor: "#ADB5BD",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          justifyItems:'center',
          marginLeft:'40%',
          marginRight:'40%',
          marginBottom:'10%'

        }}
      >
        <div>
          {todos.map((todo, index) => (
            <Todo
              key={todo.id}
              todo={todo}
              index={index}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </div>
      </div>
      </article>
      </div>

    </>
  );
};

export default TodoList;
