import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Product from "../ItemProduct";
import styles from "./styles.module.scss";

const Products = () => {
  const { products } = useContext(CartContext);
  return (
    <div className={styles.products}>
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
