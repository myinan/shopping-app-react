import { useContext } from "react";
import CartContext from "../../../../contexts/CartContext";
import ProductDetailContext from "../../contexts/ProductDetailContext";

export default function useCart() {
  const [cart, setCart] = useContext(CartContext);
  const { curElement, selectedVariant, selectedQuantity } =
    useContext(ProductDetailContext);

  const product = {
    id: curElement.id,
    title: curElement.title.split(" ").slice(0, 4).join(" "),
    image: curElement.image,
    price: selectedVariant.price,
    size: selectedVariant.size,
    quantity: selectedQuantity,
  };

  return () => {
    const isProductInCart = cart.some(
      (item) => item.id === product.id && item.size === product.size
    );

    if (!isProductInCart) {
      setCart([...cart, product]);
    }
    return isProductInCart;
  };
}
