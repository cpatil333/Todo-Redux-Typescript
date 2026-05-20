import { useEffect } from "react";
import { getUsersApi } from "../../api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch } from "../../app/store";
import { setUsers } from "../../features/users/userSlice";
import type { RootState } from "../../app/store";
import UserItem from "./UserItem";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector((state: RootState) => state.users.users);

  const fetchData = async () => {
    try {
      const data = await getUsersApi();
      dispatch(setUsers(data.users));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users?.map((user) =>
        user ? <UserItem key={user._id} users={user} /> : null,
      )}
    </div>
  );
};

export default UserList;
