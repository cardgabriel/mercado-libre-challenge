import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.appMain}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
