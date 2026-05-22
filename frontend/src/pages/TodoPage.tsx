import TodoForm from "../components/todos/TodoForm";
import TodoList from "../components/todos/TodoList";
import styles from "./user.module.css"

const TodoPage = () => {
  return (
     <div className={styles.container}>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoPage;
