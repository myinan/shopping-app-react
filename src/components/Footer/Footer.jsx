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
            width="30px"
            height="30px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 10.375c0 0.938 0.344 1.969 0.781 3.063s1 2.125 1.438 2.906c1.188 2.063 2.719 4.094 4.469 5.781s3.813 3.094 6.125 3.938c1.344 0.531 2.688 1.125 4.188 1.125 0.75 0 1.813-0.281 2.781-0.688 0.938-0.406 1.781-1.031 2.094-1.781 0.125-0.281 0.281-0.656 0.375-1.094 0.094-0.406 0.156-0.813 0.156-1.094 0-0.156 0-0.313-0.031-0.344-0.094-0.188-0.313-0.344-0.563-0.5-0.563-0.281-0.656-0.375-1.5-0.875-0.875-0.5-1.781-1.063-2.563-1.469-0.375-0.219-0.625-0.313-0.719-0.313-0.5 0-1.125 0.688-1.656 1.438-0.563 0.75-1.188 1.438-1.625 1.438-0.219 0-0.438-0.094-0.688-0.25s-0.5-0.281-0.656-0.375c-2.75-1.563-4.594-3.406-6.156-6.125-0.188-0.313-0.625-0.969-0.625-1.313 0-0.406 0.563-0.875 1.125-1.375 0.531-0.469 1.094-1.031 1.094-1.719 0-0.094-0.063-0.375-0.188-0.781-0.281-0.813-0.656-1.75-0.969-2.656-0.156-0.438-0.281-0.75-0.313-0.906-0.063-0.094-0.094-0.219-0.125-0.375s-0.094-0.281-0.125-0.406c-0.094-0.281-0.25-0.5-0.406-0.625-0.156-0.063-0.531-0.156-0.906-0.188-0.375 0-0.813-0.031-1-0.031-0.094 0-0.219 0-0.344 0.031h-0.406c-1 0.438-1.719 1.313-2.25 2.344-0.5 1.031-0.813 2.188-0.813 3.219z"></path>
          </svg>
          <p>(+90)555-666-7788</p>
        </div>

        <div className={styles.contactInfo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 -960 960 960"
            fill="#000000"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          <p>helpdesk@shoetrove.com</p>
        </div>

        <div className={styles.contactInfo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 -960 960 960"
            fill="#000000"
          >
            <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
          </svg>
          <p>Chat with us</p>
        </div>
      </div>
    </div>
  );
}

function FooterMainBottomSection() {
  return (
    <div className={styles.mainFooterBottomSection}>
      <p>© 2024 ShoeTrove</p>
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
      <a href="https://github.com/myinan">
        <svg viewBox="0 0 128 128" width="30px" height="30px">
          <g fill="#181616">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
            ></path>
            <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
          </g>
        </svg>
        Developed by Yasir İnan
      </a>
      <p>© Copyright 2024 Yasir İnan. All rights reserved.</p>
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
