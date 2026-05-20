import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo, TodoState } from "./todoTypes";

const initialState: TodoState = {
  todos: [],
  selectedTodo: null,
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    getTodo: (state, action: PayloadAction<Todo>) => {
      state.selectedTodo = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.unshift(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo,
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearSelectedTodo: (state) => {
      state.selectedTodo = null;
    },
  },
});

export const {
  setTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
  setLoading,
  setError,
  clearSelectedTodo
} = todoSlice.actions;
export default todoSlice.reducer;
