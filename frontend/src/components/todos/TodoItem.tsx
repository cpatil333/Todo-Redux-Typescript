import { useDispatch } from "react-redux";
import type { Todo } from "../../features/todos/todoTypes";
import type { AppDispatch } from "../../app/store";
import { getTodoByIdApi } from "../../api/todoApi";
import {getTodo } from "../../features/todos/todoSlice";

interface TodoItemPage {
  todo: Todo;
}
const TodoItem = ({ todo }: TodoItemPage) => {
  const dispatch = useDispatch<AppDispatch>();
 
  const handleEdit = async (id: string) => {
    try {
      const data = await getTodoByIdApi(id);
      console.log(data.todo)
      dispatch(getTodo(data.todo));
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div>
      <span>{todo.title}</span>{" "}
      <span>{todo.completed ? "Completed" : "Not Completed"}</span>{" "}
      <button onClick={() => handleEdit(todo._id)}>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
