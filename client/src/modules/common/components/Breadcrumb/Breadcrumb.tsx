import styles from "./Breadcrumb.module.scss";

interface BreadcrumbProps {
  categories?: string[];
}

const Breadcrumb = ({ categories = [] }: BreadcrumbProps) => {
  const breadcrumbItems = [
    { label: "Inicio" },
    ...categories.map((category) => ({ label: category })),
  ];

  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.list}>
        {breadcrumbItems.map((item, index) => (
          <li key={item.label} className={styles.item}>
            {index > 0 && <span className={styles.separator}>&gt;</span>}
            <span
              className={
                index === breadcrumbItems.length - 1
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
