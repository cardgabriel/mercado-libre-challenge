import styles from "./NotFound.module.scss";
import NotFoundIcon from "@/assets/icons/not-found.svg";
import SEO from "@/common/components/SEO/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Página no encontrada"
        description="La página que estás buscando no existe"
      />
      <div className={styles.not_found} role="alert" aria-atomic="true">
        <img src={NotFoundIcon} alt="Página no encontrada" />
        <p>Parece que esta página no existe</p>
        <a href="/" aria-label="Ir a la página de inicio">
          Ir a la página principal
        </a>
      </div>
    </>
  );
};

export default NotFound;
