/* import styles from "./Cart.module.css"; */
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";

export default function CartPage() {
  const [cart] = useContext(CartContext);

  return (
    <div>
      {cart.map((item, index) => {
        return <p key={index}>{item.price}</p>;
      })}
    </div>
  );
}
