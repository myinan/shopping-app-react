import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function FooterTop() {
  return (
    <div className={styles.topFooter}>
      <h3>Subscribe to our weekly newsletter.</h3>
      <p>Enjoy 10% off your first purchase when you sign up!</p>
      <form className={styles.topFooterForm}>
        <input type="mail" placeholder="Enter your email here." />
        <button type="submit" onClick={(e) => e.preventDefault()}>
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

function FooterMainLeftSection() {
  return (
    <div className={styles.linksSectionContainer}>
      <div className={styles.linksBlock}>
        <h4>Company</h4>
        <Link>Our Story</Link>
        <Link>Shop Locations</Link>
        <Link>Virtual</Link>
        <Link>Bulk Sale</Link>
        <Link>Philanthropy</Link>
      </div>

      <div className={styles.linksBlock}>
        <h4>Brand</h4>
        <Link>Style & Fit</Link>
        <Link>Craftsmanship</Link>
        <Link>Reviews</Link>
        <Link>Blog</Link>
        <Link>Press</Link>
      </div>

      <div className={styles.linksBlock}>
        <h4>Help</h4>
        <Link>Shipping & Returns</Link>
        <Link>Repairs</Link>
        <Link>Warranty</Link>
        <Link>FAQ</Link>
        <Link>Contact Us</Link>
      </div>
    </div>
  );
}

function FooterMainRightSection() {
  return (
    <div className={styles.contactSectionContainer}>
      <h4>Need help? Contact us.</h4>
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactInfo}>
          <svg
            fill="#000000"
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 10.375c0 0.938 0.344 1.969 0.781 3.063s1 2.125 1.438 2.906c1.188 2.063 2.719 4.094 4.469 5.781s3.813 3.094 6.125 3.938c1.344 0.531 2.688 1.125 4.188 1.125 0.75 0 1.813-0.281 2.781-0.688 0.938-0.406 1.781-1.031 2.094-1.781 0.125-0.281 0.281-0.656 0.375-1.094 0.094-0.406 0.156-0.813 0.156-1.094 0-0.156 0-0.313-0.031-0.344-0.094-0.188-0.313-0.344-0.563-0.5-0.563-0.281-0.656-0.375-1.5-0.875-0.875-0.5-1.781-1.063-2.563-1.469-0.375-0.219-0.625-0.313-0.719-0.313-0.5 0-1.125 0.688-1.656 1.438-0.563 0.75-1.188 1.438-1.625 1.438-0.219 0-0.438-0.094-0.688-0.25s-0.5-0.281-0.656-0.375c-2.75-1.563-4.594-3.406-6.156-6.125-0.188-0.313-0.625-0.969-0.625-1.313 0-0.406 0.563-0.875 1.125-1.375 0.531-0.469 1.094-1.031 1.094-1.719 0-0.094-0.063-0.375-0.188-0.781-0.281-0.813-0.656-1.75-0.969-2.656-0.156-0.438-0.281-0.75-0.313-0.906-0.063-0.094-0.094-0.219-0.125-0.375s-0.094-0.281-0.125-0.406c-0.094-0.281-0.25-0.5-0.406-0.625-0.156-0.063-0.531-0.156-0.906-0.188-0.375 0-0.813-0.031-1-0.031-0.094 0-0.219 0-0.344 0.031h-0.406c-1 0.438-1.719 1.313-2.25 2.344-0.5 1.031-0.813 2.188-0.813 3.219z"></path>
          </svg>
          <p>Phone Number</p>
        </div>

        <div className={styles.contactInfo}>
          <p>Mail address</p>
        </div>

        <div className={styles.contactInfo}>
          <p>Chat with us</p>
        </div>
      </div>
    </div>
  );
}

function FooterMainBottomSection() {
  return (
    <div className={styles.mainFooterBottomSection}>
      <p>2023 ShoeTrove</p>
      <Link>Privacy</Link>
      <Link>Accessibility</Link>
      <Link>Terms of Service</Link>
      <Link>Refund Policy</Link>
      <Link>Conformity</Link>
    </div>
  );
}

function FooterMain() {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.mainFooterTopSection}>
        <FooterMainLeftSection />
        <FooterMainRightSection />
      </div>
      <FooterMainBottomSection />
    </div>
  );
}

function FooterBottom() {
  return (
    <div className={styles.bottomFooter}>
      <p>Developed by Yasir İnan</p>
      <p>Copyright 2024 Yasir İnan. All rights reserved.</p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <FooterTop />
      <FooterMain />
      <FooterBottom />
    </footer>
  );
}
