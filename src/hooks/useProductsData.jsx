import { useState, useEffect } from "react";

export default function useProductsData(query) {
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    return () => {
      ignore = true;
    };
  }, [query]);

  return { productsData, error, loading };
}
