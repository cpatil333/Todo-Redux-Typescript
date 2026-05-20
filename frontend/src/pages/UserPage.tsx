import UserForm from "../components/users/UserForm"
import UserList from "../components/users/UserList"

function UserPage() {
  return (
    <div>
        <h1>User Page</h1>
        <UserForm />
        <UserList />
    </div>
  )
}

export default UserPage