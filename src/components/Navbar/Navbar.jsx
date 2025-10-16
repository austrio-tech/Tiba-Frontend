import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import styles from './Navbar.module.css'; // CSS Modules

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * (2 / 3);
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className={styles.navbarContent}>
        <div className={styles.logoContainer}>
          <img src={logo} className={styles.navbarLogo} alt="My Company Logo" />
          <h1 className={styles.navbarLogoText}>Tiba Engineering & Contracting LLC</h1>
        </div>

        <button className={styles.menuButton} onClick={toggleMenu}>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>

        <ul className={`${styles.navbarLinks} ${menuOpen ? styles.showMenu : ''}`}>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#vision">Vision & Values</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
