import { useDispatch } from "react-redux";
import { deleteUserApi, getUsersByIdApi } from "../../api/userApi";
import type { User } from "../../features/users/userTypes";
import { type AppDispatch } from "../../app/store";
import { deleteUsers, getUser } from "../../features/users/userSlice";

interface UsetItemPage {
  users: User;
}

const UserItem = ({ users }: UsetItemPage) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleEdit = async (id: string) => {
    try {
      const data = await getUsersByIdApi(id);
      dispatch(getUser(data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const data = await deleteUserApi(id);
      dispatch(deleteUsers(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {users.username} {users.email}
      <button onClick={() => handleEdit(users._id)}>Edit</button>
      <button onClick={() => handleDelete(users._id)}>Delete</button>
    </div>
  );
};

export default UserItem;
