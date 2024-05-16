import styles from "./SearchOffCanvas.module.css";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ProductDataContext from "../../../contexts/ProductDataContext";

function SearchItem({ product }) {
  return <p>{product.title}</p>;
}

SearchItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    base_price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

function SearchOffCanvas() {
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { bootsData, sportsData, featuredData } =
    useContext(ProductDataContext);

  const { productsData: bootsArr } = bootsData;
  const { productsData: sportsArr } = sportsData;
  const { productsData: featuredArr } = featuredData;
  const productsArr = [...bootsArr, ...sportsArr, ...featuredArr];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const filteredProducts = productsArr.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredProducts);
  };
  return (
    <>
      <button onClick={handleShow} className={styles.headerSearchButton}>
        <svg
          fill="#000000"
          width="30px"
          height="30px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z"
            fillRule="evenodd"
          />
        </svg>
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        scroll={true}
        backdrop={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search Collection</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
            <input
              type="search"
              className={styles.searchInput}
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className={styles.innerButton}>
              GO
            </button>
          </form>

          <div className={styles.searchResults}>
            {searchResults.map((result, index) => {
              return <SearchItem key={index} product={result} />;
            })}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SearchOffCanvas;
