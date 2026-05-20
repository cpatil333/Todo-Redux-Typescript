export interface Todo {
  _id: string;
  title: string;
  completed: boolean;
  user: string;
  createAt: Date;
  updatedAt: Date;
}

export interface TodoState {
  todos: Todo[];
  selectedTodo: Todo | null,
  loading: boolean;
  error: string | null;
}
