import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import type { AppDispatch, RootState } from "../../app/store";
import { getTodoApi } from "../../api/todoApi";
import { setTodos } from "../../features/todos/todoSlice";
import { useEffect } from "react";

const TodoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const fetchTodos = async () => {
    try {
      const data = await getTodoApi();
      dispatch(setTodos(data.todos));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);
 
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
