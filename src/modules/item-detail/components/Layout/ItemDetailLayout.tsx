import styles from "./ItemDetailLayout.module.scss";

const ItemDetailLayout = () => {
  return (
    <div className={styles.container_area}>
      <div className={styles.breadcrumb_area}></div>
      <div className={styles.items_images_area}></div>
      <div className={styles.product_info_area}></div>
      <div className={styles.product_description_area}></div>
    </div>
  );
};

export default ItemDetailLayout;
