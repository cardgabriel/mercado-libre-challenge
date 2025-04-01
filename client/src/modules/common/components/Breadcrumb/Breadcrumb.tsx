import styles from "./Breadcrumb.module.scss";

const MOCK_BREADCRUMB = [
  { label: "Inicio" },
  { label: "Categoría" },
  { label: "Producto" },
];

const Breadcrumb = () => {
  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.list}>
        {MOCK_BREADCRUMB.map((item, index) => (
          <li key={item.label} className={styles.item}>
            {index > 0 && <span className={styles.separator}>&gt;</span>}
            <span
              className={
                index === MOCK_BREADCRUMB.length - 1
                  ? styles.current
                  : styles.text
              }
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
