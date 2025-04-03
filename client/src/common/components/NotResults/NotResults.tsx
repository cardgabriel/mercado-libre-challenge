import styles from "./NotResults.module.scss";
import NotFoundIcon from "@/assets/icons/not-found.svg";

const NotResults = () => {
  return (
    <div
      className={styles.no_results}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <img src={NotFoundIcon} alt="Sin resultados" />
      <p>No hay publicaciones que coincidan con tu búsqueda</p>
    </div>
  );
};

export default NotResults;
