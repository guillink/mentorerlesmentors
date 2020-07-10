import React from "react";
import { RouteComponentProps } from "@reach/router";
import { TodoItem } from "./TodoItem/TodoItem";
import { connectTodos } from "./connectTodos";

export interface TodosProps extends RouteComponentProps {
  ids: number[];
  total: number;
}

const TodosRaw: React.FunctionComponent<TodosProps> = ({ ids, total }) => {
  return (
    <>
      Total: {total}
      <ul>
        {ids.map((id) => (
          <TodoItem key={id} id={id} />
        ))}
      </ul>
    </>
  );
};

export const Todos = connectTodos(TodosRaw);
