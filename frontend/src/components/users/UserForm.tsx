import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { createUserApi, updateUserApi } from "../../api/userApi";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../app/store";
import {
  addUser,
  clearSelectedUser,
  updateUser,
} from "../../features/users/userSlice";

const UserForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState({
    id: "",
    username: "",
    password: "",
    email: "",
  });

  const selectedUser = useSelector((state: any) => state.users.selectedUser);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (selectedUser) {
        const data = await updateUserApi(inputValue.id, {
          username: inputValue.username,
          password: inputValue.password,
          email: inputValue.email,
        });
        dispatch(updateUser(data));
        dispatch(clearSelectedUser());
        setInputValue({
          id: "",
          username: "",
          password: "",
          email: "",
        });
      } else {
        const data = await createUserApi({
          username: inputValue.username,
          password: inputValue.password,
          email: inputValue.email,
        });

        dispatch(addUser(data.user));

        setInputValue({
          id: "",
          username: "",
          password: "",
          email: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedUser) {
      setInputValue({
        id: selectedUser.user._id,
        username: selectedUser.user.username,
        password: selectedUser.user.password,
        email: selectedUser.user.email,
      });
    }
  }, [selectedUser]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            name="username"
            value={inputValue.username}
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={inputValue.password}
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={inputValue.email}
            onChange={handleInput}
          />
        </div>
        <button type="submit">
          {
            selectedUser ? "Update User" : "Add User"
          }
        </button>
      </form>
    </div>
  );
};

export default UserForm;
