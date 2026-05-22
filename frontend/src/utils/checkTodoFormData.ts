import toast from "react-hot-toast";

type TodoFormData = {
  title: string;
  completed: false;
  user: string;
};

export const checkTodoFormData = (data: TodoFormData): boolean => {
  if (data.title.trim() === "") {
    toast.error("Please enter title");
    return false;
  }
  return true;
};
