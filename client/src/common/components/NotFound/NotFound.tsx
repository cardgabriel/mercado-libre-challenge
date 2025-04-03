import styles from "./NotFound.module.scss";
import NotFoundIcon from "@/assets/icons/not-found.svg";

const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <img src={NotFoundIcon} alt="Página no encontrada" />
      <p>Parece que esta página no existe</p>
      <a href="/">Ir a la página principal</a>
    </div>
  );
};

export default NotFound;
