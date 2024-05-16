import { useContext } from "react";
import CartContext from "../../../../contexts/CartContext";
import ProductDetailContext from "../../contexts/ProductDetailContext";

export default function useCart() {
  const [cart, setCart] = useContext(CartContext);
  const { curElement, selectedVariant } = useContext(ProductDetailContext);
  const productInfo = {
    title: curElement.title.split(" ").slice(0, 4).join(" "),
    image: curElement.image,
    price: selectedVariant.price,
    size: selectedVariant.size,
    quantity: "",
  };

  return () => setCart([...cart, productInfo]);
}
