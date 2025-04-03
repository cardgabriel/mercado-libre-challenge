import styles from "./NotResults.module.scss";
import NotFoundIcon from "@/assets/icons/not-found.svg";
import SEO from "@/common/components/SEO/SEO";

const NotResults = () => {
  return (
    <>
      <SEO
        title="Sin resultados"
        description="No se encontraron resultados para la búsqueda"
      />
      <div
        className={styles.no_results}
        role="alert"
        aria-live="polite"
        aria-atomic="true"
      >
        <img src={NotFoundIcon} alt="Sin resultados" width="200" height="200" />
        <p>No hay publicaciones que coincidan con tu búsqueda</p>
      </div>
    </>
  );
};

export default NotResults;
