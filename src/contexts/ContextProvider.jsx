import ProductDataContext from "./ProductDataContext";
import CartContext from "./CartContext";
import useOutletContextData from "../hooks/useContextData";
import PropTypes from "prop-types";

const ContextProvider = ({ children }) => {
  const productsData = useOutletContextData();

  return (
    <ProductDataContext.Provider value={productsData}>
      <CartContext.Provider>{children}</CartContext.Provider>
    </ProductDataContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ContextProvider;
