import toast from "react-hot-toast";

type UserFormData = {
  username: string;
  password: string;
  email: string;
};

export const checkUserFormData = (data: UserFormData): boolean => {
  if (data?.username.trim() === "") {
    toast.error("Please enter user name");
    return false;
  } else if (data?.password.trim() === "") {
    toast.error("Please enter password");
    return false;
  } else if (data?.email.trim() === "") {
    toast.error("Please enter email");
    return false;
  }
  return true;
};
