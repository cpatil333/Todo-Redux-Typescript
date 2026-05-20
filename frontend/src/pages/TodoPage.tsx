import TodoForm from "../components/todos/TodoForm";
import TodoList from "../components/todos/TodoList";

const TodoPage = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoPage;
