import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function FooterTop() {
  return (
    <div className={styles.topFooter}>
      <h3>Subscribe to our weekly newsletter.</h3>
      <p>Enjoy 10% off your first purchase when you sign up!</p>
      <form>
        <input type="mail" placeholder="Enter your email here." />
        <label>Subscribe</label>
      </form>
    </div>
  );
}

function FooterMainLeftSection() {
  return (
    <div className={styles.linksSectionContainer}>
      <div className={styles.linksBlock}>
        <h4>Company</h4>
        <Link>Link 1</Link>
        <Link>Link 2</Link>
        <Link>Link 3</Link>
        <Link>Link 4</Link>
        <Link>Link 5</Link>
      </div>

      <div className={styles.linksBlock}>
        <h4>Brand</h4>
        <Link>Link 6</Link>
        <Link>Link 7</Link>
        <Link>Link 8</Link>
        <Link>Link 9</Link>
        <Link>Link 10</Link>
      </div>

      <div className={styles.linksBlock}>
        <h4>Help</h4>
        <Link>Link 11</Link>
        <Link>Link 12</Link>
        <Link>Link 13</Link>
        <Link>Link 14</Link>
        <Link>Link 15</Link>
      </div>
    </div>
  );
}

function FooterMainRightSection() {
  return (
    <div className={styles.contactSectionContainer}>
      <h4>Need help? Contact us.</h4>
      <div className={styles.contactInfoContainer}>
        <p>Phone Number</p>
        <p>Mail address</p>
        <p>Chat with us</p>
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
