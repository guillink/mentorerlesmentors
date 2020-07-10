import React from "react";
import { Todo } from "../../../store/todos/todosSlice";
import { connectTodoItem } from "./connectTodoItem";

export type TodoItemProps = Pick<Todo, "title" | "completed"> & {
  toggle(): void;
};

export const TodoItemRaw: React.FunctionComponent<TodoItemProps> = ({
  title,
  completed,
  toggle,
}) => <li onClick={toggle}>{completed ? <del>{title}</del> : title}</li>;

export const TodoItem = connectTodoItem(TodoItemRaw);
