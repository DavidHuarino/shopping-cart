import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart";
import styles from "./styles.module.scss";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce(
    (prev, cur) => prev + cur.amount * cur.price,
    0
  );
  return (
    <div className={styles.cart}>
      <h3 className={styles.title}>Tu carrito</h3>
      {cart.map((item, index) => (
        <ItemCart cartItem={item} key={index} />
      ))}
      <p className={styles.total}>Total: ${totalPrice}</p>
    </div>
  );
};

export default Cart;
