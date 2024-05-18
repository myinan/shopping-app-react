import styles from "./Cart.module.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CartContext from "../../contexts/CartContext";

function CartItem({ item }) {
  const [, setCart] = useContext(CartContext);
  const total = item.price * item.quantity;

  function decreaseQuantity() {
    setCart((prevCart) =>
      prevCart.map((cartItem) => {
        if (
          cartItem.id === item.id &&
          cartItem.size === item.size &&
          cartItem.quantity > 0
        ) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      })
    );
  }

  function increaseQuantity() {
    setCart((prevCart) =>
      prevCart.map((cartItem) => {
        if (
          cartItem.id === item.id &&
          cartItem.size === item.size &&
          cartItem.quantity < 15
        ) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      })
    );
  }

  function removeItem() {
    setCart((prevCart) =>
      prevCart.filter(
        (cartItem) => !(cartItem.id === item.id && cartItem.size === item.size)
      )
    );
  }

  return (
    <tr>
      <td className={styles.cartItemCell}>
        <div className={styles.cartItemMain}>
          <Link to={`/collection/${item.id}`}>
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
      <td className={styles.cartItemQuantityContainer}>
        <button
          type="button"
          onClick={decreaseQuantity}
          disabled={item.quantity < 2}
        >
          -
        </button>
        <p>{item.quantity}</p>
        <button
          type="button"
          onClick={increaseQuantity}
          disabled={item.quantity > 13}
        >
          +
        </button>
      </td>
      <td>
        <p>{`${total}$`}</p>
      </td>
      <td className={styles.removeBtnContainer}>
        <button type="buton" onClick={removeItem}>
          REMOVE
        </button>
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
  const [cart, setCart] = useContext(CartContext);
  const [pending, setPending] = useState(false);

  function checkout(event) {
    event.preventDefault();
    setPending((prevVal) => !prevVal);

    setTimeout(() => {
      setCart([]);
      setPending((prevVal) => !prevVal);
      alert("Purchase successful.");
    }, 2000);
  }

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
            {cart.map((item, index) => {
              return <CartItem item={item} key={`${index}${item.id}`} />;
            })}
          </tbody>
        </table>

        <div className={styles.cartCheckout}>
          <p className={styles.cartTotalPrice}>Total Price here...</p>
          <button
            type="submit"
            onClick={(e) => checkout(e)}
            disabled={pending}
            className={styles.checkoutBtn}
          >
            {pending ? "PENDING..." : "CHECKOUT"}
          </button>
          <Link to="/collection" className={styles.keepShoppingLink}>
            Keep Shopping
          </Link>
        </div>
      </form>
    </div>
  );
}

function EmptyCartPage() {
  return (
    <div className={styles.cartPage}>
      <h2>YOUR CART IS LOOKING EMPTY.</h2>
      <Link to="/collection">SHOP NOW</Link>
    </div>
  );
}

export default function CartPage() {
  const [cart] = useContext(CartContext);

  return cart.length !== 0 ? <FilledCartPage /> : <EmptyCartPage />;
}
