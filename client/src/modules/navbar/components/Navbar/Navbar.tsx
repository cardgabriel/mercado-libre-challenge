import { Outlet, Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import PrimaryLogo from "@/assets/logos/logo_ML_2x.png.webp";
import SearchInput from "../SearchInput/SearchInput";

const Navbar = () => {
  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/">
          <img
            src={PrimaryLogo}
            alt="Mercado Libre Logo"
            className={styles.logo}
          />
        </Link>
        <SearchInput />
      </div>
    </nav>
      <main className={styles.app_main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
