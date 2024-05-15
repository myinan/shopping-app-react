import styles from "./SearchOffCanvas.module.css";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
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
      <Button variant="primary" onClick={handleShow}>
        Search
      </Button>

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
            <button type="submit" className={styles.searchButton}>
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
