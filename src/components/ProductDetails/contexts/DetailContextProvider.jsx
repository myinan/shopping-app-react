import PropTypes from "prop-types";
import useVariantSelection from "../hooks/useVariantSelection";
import ProductDetailContext from "./ProductDetailContext";

const DetailContextProvider = ({ children }) => {
  const data = useVariantSelection();

  return (
    <ProductDetailContext.Provider value={data}>
      {children}
    </ProductDetailContext.Provider>
  );
};

DetailContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};

export default DetailContextProvider;
