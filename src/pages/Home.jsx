function HomePage() {
  return (
    <main>
      <h1>This is a main placeholder.</h1>
    </main>
  );
}

export default HomePage;

/* import { useEffect } from "react";
import useProductsData from "../hooks/useProductData";

function HomePage() {
  let elements = null;
  const productsData = useProductsData("adidas sneakers");

  useEffect(() => {
    console.log(productsData);
  });

  if (productsData) {
    elements = productsData.map((product, index) => {
      return (
        <img
          key={index}
          src={product.image}
          alt="image"
          height="180px"
          width="250px"
        />
      );
    });
  }

  return <main>{elements}</main>;
}
 */
