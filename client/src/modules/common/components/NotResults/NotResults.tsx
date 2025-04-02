import styles from "./NotResults.module.scss";
import NotFoundIcon from "@/assets/icons/not-found.svg";

const NoResults = () => {
  return (
    <div className={styles.no_results}>
      <img src={NotFoundIcon} alt="Sin resultados" />
      <p>No hay publicaciones que coincidan con tu búsqueda</p>
      <a href="/">Ir a la página principal</a>
    </div>
  );
};

export default NoResults;
