import styles from "./Pagination.module.css";
import PropTypes from "prop-types";

export default function Pagination({
  productsPerPage,
  totalProducts,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a
                onClick={() => paginate(number)}
                className={styles.pageNumLink}
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
};
