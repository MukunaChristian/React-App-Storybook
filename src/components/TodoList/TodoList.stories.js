import React from "react";
import TodoList from "./TodoList";
import { Card, TextInput, Box } from "@mantine/core";

export default {
  title: "page/TodoList",
};

export const DefaultTodoList = () => (
  <Card shadow="sm" padding="lg" radius="md" withBorder>
    <TodoList />
  </Card>
);
