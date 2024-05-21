import { useState, useEffect } from "react";

export default function useProductsData(query) {
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.stockx.vlour.me/search?query=${query}`
        );
        if (!response.ok) {
          setError(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        if (!ignore) {
          setProductsData(data.hits);
        }
      } catch (err) {
        if (!ignore) {
          setError(err);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [query]);

  return { productsData, error, loading };
}
