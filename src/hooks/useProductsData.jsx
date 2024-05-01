import { useState, useEffect } from "react";

export default function useProductsData(query) {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      try {
        fetch(`https://api.stockx.vlour.me/search?query=${query}`)
          .then((response) => response.json())
          .then((data) => {
            setProductsData(data.hits);
          });
      } catch (err) {
        return err;
      }
    }

    return () => {
      ignore = true;
    };
  }, [query, setProductsData]);

  return productsData;
}
