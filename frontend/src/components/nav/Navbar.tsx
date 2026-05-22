import styles from "./navbar.module.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.divHorizonal}>
        <Link to="/" className={styles.link}>User</Link>
        <Link to="/todos" className={styles.link}>Todo</Link>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Navbar;
