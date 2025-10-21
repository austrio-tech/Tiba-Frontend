import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";

import { MdCall } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.column}>
        {/* <h3>Contact Us</h3> */}
        <div className={styles.cname}>
          <img src={logo} className={styles.footerLogo} alt="My Company Logo" />
          <p className={styles.cnameText}>TIBA Engineering & Contracting LLC</p>
        </div>
        <p>
          <strong>Mohammed Tarek (Managing Director)</strong> <br /> <MdCall /> +968 9919 2454 <FaWhatsapp /> +968 9919 2454 <br />
          <strong>Saravanan Sekar (Operations Manager)</strong> <br /> <MdCall /> +968 9114 6583 <FaWhatsapp /> +968 9800 7420 <br />
          <strong>Hamanant Godase (Project Manager)</strong> <br /> <MdCall /> +968 7840 9311 <FaWhatsapp /> +968 9639 2826 <br />
        </p>
        
      </div>

      <div className={styles.column}>
        <h3>Address</h3>
        <p>Floor 5, Door 504</p>
        <p>Complex 1532, Way 3519</p>
        <p>Al Khuwair North</p>
        <p>Muscat, Oman</p>
        {/* <p>Postal Code: 123456</p> */}
        <p>
          <strong>Email:</strong> mail@tibaoman.com
        </p>
        <p>
          <strong>Fax:</strong> +968 24489096
        </p>
        {/* <div className={styles.socials}>
          <p>
            <strong>Follow Us: </strong>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          </p>
        </div> */}
      </div>

      <div className={styles.column}>
        {/* <h3>Find Us</h3> */}
        <div className={styles.mapContainer}>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3656.300435741182!2d58.41877827533115!3d23.593555878777714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM1JzM2LjgiTiA1OMKwMjUnMTYuOSJF!5e0!3m2!1sen!2som!4v1760362755125!5m2!1sen!2som"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
    <div className={styles.bottomBar}>
      <p>&copy; {new Date().getFullYear()} TIBA Engineering & Contracting LLC. All rights reserved.</p>
    </div>
    </>
  );
};
export default Footer;
