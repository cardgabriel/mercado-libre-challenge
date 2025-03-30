import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className={styles.app}>
      <nav className={styles.navbar} />
      <main className={styles.appMain}>
        <Outlet />
      </main>
    </div>
  );
}; 