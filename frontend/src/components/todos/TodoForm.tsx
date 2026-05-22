import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import {
  addTodo,
  setError,
  updateTodo,
  clearSelectedTodo,
} from "../../features/todos/todoSlice";
import { createTodoApi, updateTodoApi } from "../../api/todoApi";
import { checkTodoFormData } from "../../utils/checkTodoFormData";

type TodoFormData = {
  title: string;
  completed: false;
  user: string;
};

const intiailFormData: TodoFormData = {
  title: "",
  completed: false,
  user: "6a0c128868e69e1dfeeedbd4",
};

const TodoForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState<TodoFormData>(intiailFormData);

  const selectedItem = useSelector(
    (state: RootState) => state.todos.selectedTodo,
  );

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!checkTodoFormData(inputValue)) return;

      if (selectedItem) {
        const data = await updateTodoApi(inputValue.user, {
          title: inputValue.title,
          completed: false,
        });
        dispatch(updateTodo(data.todo));
        setInputValue({
          title: "",
          completed: false,
          user: "6a0c128868e69e1dfeeedbd4",
        });
        dispatch(clearSelectedTodo());
      } else {
        const data = await createTodoApi({
          title: inputValue.title,
          completed: false,
          user: inputValue.user,
        });
        dispatch(addTodo(data.todo));
        setInputValue(intiailFormData);
      }
    } catch (error) {
      dispatch(setError("Failed to create todo"));
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      selectedItem &&
      (inputValue.title !== selectedItem.title ||
        inputValue.completed !== selectedItem.completed ||
        inputValue.user !== selectedItem.user)
    ) {
      setInputValue({
        title: selectedItem.title,
        completed: selectedItem.completed,
        user: selectedItem.user,
      });
    }
  }, [selectedItem, inputValue]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo..."
          name="title"
          value={inputValue.title}
          onChange={handleInput}
        />
        <br />
        <button type="submit">
          {selectedItem ? "Update Todo" : "Add Todo"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
