import { useLocalStorage } from "@uidotdev/usehooks";
import ProductDataContext from "./ProductDataContext";
import CartContext from "./CartContext";
import useOutletContextData from "../hooks/useContextData";
import PropTypes from "prop-types";

const ContextProvider = ({ children }) => {
  const productsData = useOutletContextData();
  const [cart, setCart] = useLocalStorage("cart", []);

  return (
    <ProductDataContext.Provider value={productsData}>
      <CartContext.Provider value={[cart, setCart]}>
        {children}
      </CartContext.Provider>
    </ProductDataContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ContextProvider;
