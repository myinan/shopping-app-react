import PropTypes from "prop-types";
import { useState } from "react";
import useCurrProductData from "../hooks/useCurrProductData";
import ProductDetailContext from "./ProductDetailContext";

const DetailContextProvider = ({ children }) => {
  const data = useCurrProductData();
  // Control the quantity selection input
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  return (
    <ProductDetailContext.Provider
      value={{ ...data, selectedQuantity, setSelectedQuantity }}
    >
      {children}
    </ProductDetailContext.Provider>
  );
};

DetailContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};

export default DetailContextProvider;
