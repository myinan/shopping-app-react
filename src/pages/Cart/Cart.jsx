import styles from "./Cart.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CartContext from "../../contexts/CartContext";

function CartItem({ item }) {
  const total = Number(item.price) * Number(item.quantity);

  return (
    <tr>
      <td className={styles.cartItemCell}>
        <div className={styles.cartItemMain}>
          <Link>
            <img src={item.image} alt={item.title} />
          </Link>
          <p>{item.title}</p>
        </div>
      </td>
      <td>
        <p>{item.size}</p>
      </td>
      <td>
        <p>{`${item.price}$`}</p>
      </td>
      <td>
        <p>{item.quantity}</p>
      </td>
      <td>
        <p>{`${total}$`}</p>
      </td>
      <td className={styles.removeBtnContainer}>
        <button type="buton">REMOVE</button>
      </td>
    </tr>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

function FilledCartPage() {
  const [cart] = useContext(CartContext);

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.cartTitle}>YOUR CART</h1>

      <form className={styles.cartForm}>
        <table className={styles.cartTable}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </tbody>
        </table>

        <div className={styles.cartCheckout}>
          <div className={styles.cartTotalPrice}>Total Price here...</div>
          <button type="submit">CHECKOUT</button>
          <Link to="/collection">Keep Shopping</Link>
        </div>
      </form>
    </div>
  );
}

function EmptyCartPage() {
  return (
    <div className={styles.cartPage}>
      <h2>YOUR CART IS LOOKING EMPTY.</h2>
      <Link to="/">SHOP NOW</Link>
    </div>
  );
}

export default function CartPage() {
  const [cart] = useContext(CartContext);

  return cart.length !== 0 ? <FilledCartPage /> : <EmptyCartPage />;
}
