import { useState, useEffect } from "react";

export default function useProductsData(query) {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch(`https://api.stockx.vlour.me/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setProductsData(data.hits);
      });
  }, [query, setProductsData]);

  return productsData;
}
