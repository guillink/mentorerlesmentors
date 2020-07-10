import { connect, MapStateToProps } from "react-redux";
import { AppState } from "../../store";
import { totalTodos } from "../../store/todos/todosSlice";

interface TodoItemStateProps {
  ids: number[];
  total: number;
}

const mapStateToProps: MapStateToProps<TodoItemStateProps, {}, AppState> = (
  state
) => ({
  ids: state.todos.ids as number[],
  total: totalTodos(state),
});

export const connectTodos = connect(mapStateToProps);
