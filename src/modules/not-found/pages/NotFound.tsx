import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <img src="/src/assets/icons/not-found.svg" alt="Página no encontrada" />
      <p>Parece que esta página no existe</p>
      <a href="/">Ir a la página principal</a>
    </div>
  );
};

export default NotFound;
