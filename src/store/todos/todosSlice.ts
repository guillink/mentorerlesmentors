import {
  createSlice,
  createEntityAdapter,
  EntityState,
  PayloadAction,
  createAsyncThunk,
  Dictionary,
} from "@reduxjs/toolkit";
import { AppThunk, AppState } from "../store";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosState extends EntityState<Todo> {}

const todosAdapter = createEntityAdapter<Todo>();

const initialState: TodosState = {
  ids: [0, 1],
  entities: {
    0: {
      id: 0,
      title: `Devenir certifié Azure grâce à l'appui d'Alexandre Hertogs`,
      completed: false,
    },
    1: {
      id: 1,
      title: `S'en battre les couilles`,
      completed: true,
    },
  },
};

export const fetchTodos = createAsyncThunk<Todo[]>(
  "todos/fetch",
  async (_: void) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await res.json();
  }
);

export const fetchTodos2 = (): AppThunk<Promise<void>> => async (dispatch) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  dispatch(todosSlice.actions.fetched(await res.json()));
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetched: todosAdapter.setAll,
    toggled: (state, { payload: id }: PayloadAction<number>) => {
      state.entities[id] = {
        ...state.entities[id]!,
        completed: !state.entities[id]?.completed,
      };
      // todosAdapter.updateOne(state, {
      //   id,
      //   changes: {
      //     completed: !state.entities[id]!.completed,
      //   },
      // });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      todosAdapter.setAll(state, action.payload);
    });
  },
});

export const { selectTotal: totalTodos } = todosAdapter.getSelectors(
  (state: AppState) => state.todos
);
