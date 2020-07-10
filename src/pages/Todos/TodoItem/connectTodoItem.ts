import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { AppState } from "../../../store";
import { todosSlice } from "../../../store/todos/todosSlice";

interface TodoItemOwnProps {
  id: number;
}

interface TodoItemStateProps {
  title: string;
  completed: boolean;
}

interface TodoItemDispatchProps {
  toggle(): void;
}

const mapStateToProps: MapStateToProps<
  TodoItemStateProps,
  TodoItemOwnProps,
  AppState
> = (state: AppState, ownProps) => ({
  title: state.todos.entities[ownProps.id]!.title,
  completed: state.todos.entities[ownProps.id]!.completed,
});

const mapDispatchToProps: MapDispatchToProps<
  TodoItemDispatchProps,
  TodoItemOwnProps
> = (dispatch, { id }) => ({
  toggle: () => dispatch(todosSlice.actions.toggled(id)),
});

export const connectTodoItem = connect(mapStateToProps, mapDispatchToProps);
