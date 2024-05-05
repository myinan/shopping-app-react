import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Error.module.css";

function ErrorElement() {
  return <h1 className={styles.errorHeader}>404 Not Found</h1>;
}

export default function Error() {
  return (
    <>
      <Header />
      <ErrorElement />
      <Footer />
    </>
  );
}
