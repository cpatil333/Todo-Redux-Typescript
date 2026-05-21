import { useLoaderData } from "react-router-dom";
import UserItem from "./UserItem";

const UserList = () => {
  const users = useLoaderData();

  return (
    <div>
      {users?.map((user: any) =>
        user ? <UserItem key={user._id} users={user} /> : null,
      )}
    </div>
  );
};

export default UserList;
