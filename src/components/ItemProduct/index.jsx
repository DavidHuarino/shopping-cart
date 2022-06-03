import { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";

const Product = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  return (
    <div className={styles.product}>
      <img src={product.img} alt={product.name} />
      <p>
        {product.name} - ${product.price}
      </p>
      <button onClick={() => addItemToCart(product)}>Add to cart</button>
    </div>
  );
};

export default Product;
