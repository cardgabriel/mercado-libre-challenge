import SearchInput from "../SearchInput/SearchInput";
import PrimaryLogo from "@/assets/logos/logo_ML_2x.png.webp";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <img
          src={PrimaryLogo}
          alt="Mercado Libre Logo"
          className={styles.logo}
        />
        <SearchInput />
      </div>
    </nav>
  );
};

export default Navbar;
