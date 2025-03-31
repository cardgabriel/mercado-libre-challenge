import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ProductInfo from "../ProductInfo/ProductInfo";
import ImageProduct from "../ImageProduct/ImageProduct";
import ProductDescription from "../ProductDescription/ProductDescription";

const ItemDetailLayout = () => {
  return (
    <>
      <Breadcrumb />
      <ImageProduct />
      <ProductInfo />
      <ProductDescription />
    </>
  );
};

export default ItemDetailLayout;
