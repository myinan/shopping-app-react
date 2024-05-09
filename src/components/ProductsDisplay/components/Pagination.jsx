import styles from "./Pagination.module.css";
import PropTypes from "prop-types";

export default function Pagination({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pageNumsTopNav}>
      <ul className={styles.pageNumsList}>
        {pageNumbers.map((number) => {
          return (
            <li key={number} className={styles.pageNumListItem}>
              <a
                onClick={() => paginate(number)}
                className={`${styles.pageNumLink} ${currentPage === number ? styles.selected : ""}`}
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  productsPerPage: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
