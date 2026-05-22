import UserForm from "../components/users/UserForm"
import UserList from "../components/users/UserList"
import styles from "./user.module.css";

function UserPage() {
  return (
    <div className={styles.container}>
        <h1>User Page</h1>
        <UserForm />
        <UserList />
    </div>
  )
}

export default UserPage