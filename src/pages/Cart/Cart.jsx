import styles from "./Cart.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CartContext from "../../contexts/CartContext";

function CartItem({ item }) {
  return (
    <div className={styles.cartItem}>
      <p>{item.price}</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default function CartPage() {
  const [cart] = useContext(CartContext);

  return (
    <div className={styles.cartContainer}>
      {cart.length !== 0 ? (
        cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })
      ) : (
        <>
          <h2>YOUR CART IS LOOKING EMPTY.</h2>
          <Link to="/">SHOP NOW</Link>
        </>
      )}
    </div>
  );
}
