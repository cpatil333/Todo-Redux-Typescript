import api from "./axios";
import type { Todo } from "../features/todos/todoTypes";

// Get All todos
export const getTodoApi = async () => {
  const response = api.get("/todos");
  return (await response).data;
};

//Create Todo
export const createTodoApi = async (todoData: Partial<Todo>) => {
  const response = api.post("/todos", todoData);
  return (await response).data;
};


//get Single Todo data
export const getTodoByIdApi = async (id: string) => {
  const response = api.get(`/todos/${id}`);
  return (await response).data;
};

//Update Todo
export const updateTodoApi = async (id: string, todoData: Partial<Todo>) => {
  const response = api.put(`/todos/${id}`, todoData);
  return (await response).data;
};

//De;ete Todo
export const deleteTodoApi = async (id: string) => {
  const response = await api.delete(`/todos/${id}`);
  return (await response).data;
};
