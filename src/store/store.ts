import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { todosSlice, fetchTodos2 } from "./todos/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

store.dispatch(fetchTodos2());

export type AppState = ReturnType<typeof store["getState"]>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<R> = ThunkAction<R, AppState, undefined, any>;
