import React from "react";
import Todo from "./Todo";

export default {
  title: "components/Todo",
};

export const TodoExample = () => {
  const todo = { id: 1, text: "Sample Todo" };
  const index = 0;

  const handleDeleteTodo = (id) => {
    // Implement the delete logic here
    console.log("Deleting todo with id:", id);
  };

  return <Todo todo={todo} index={index} handleDeleteTodo={handleDeleteTodo} />;
};
