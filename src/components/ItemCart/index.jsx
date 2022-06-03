import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";

const ItemCart = ({ cartItem }) => {
  const { removeItemToCart, addItemToCart } = useContext(CartContext);
  return (
    <div className={styles.cartContainer}>
      <div className={styles.imgContainer}>
        <img src={cartItem.img} alt={cartItem.name} />
      </div>
      <div className={styles.titleButtonsContainer}>
        <h4>{cartItem.name}</h4>
        <button onClick={() => addItemToCart(cartItem)}>Add</button>
        <button onClick={() => removeItemToCart(cartItem)}>Remove</button>
      </div>
      <div className={styles.totalPriceContainer}>
        <p>Total: ${cartItem.amount * cartItem.price}</p>
      </div>
      <div className={styles.countItem}>
        <p>{cartItem.amount}</p>
      </div>
    </div>
  );
};

export default ItemCart;
