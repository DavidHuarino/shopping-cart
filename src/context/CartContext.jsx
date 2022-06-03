import { createContext, useEffect, useState } from "react";
import { ProductsData } from "../Data/ProductsData";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    setProducts(ProductsData);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const addItemToCart = (product) => {
    // console.log("add item", product);
    let inCart = cart.find((item) => item.id === product.id);
    if (inCart) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 };
          }
          return item;
        })
      );
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };
  const removeItemToCart = (product) => {
    let inCart = cart.find((item) => item.id === product.id);
    if (inCart) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          }
          return item;
        })
      );
    }
  };
  return (
    <CartContext.Provider
      value={{ addItemToCart, products, cart, removeItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
