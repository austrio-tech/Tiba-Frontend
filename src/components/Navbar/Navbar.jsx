// import React, { useEffect, useState } from "react";
// import logo from "../../assets/logo.svg";
// import styles from "./Navbar.module.css"; // CSS Modules
// import downloadProfile from "../../pages/DownloadProfile";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollThreshold = window.innerHeight * (2 / 3);
//       setScrolled(window.scrollY > scrollThreshold);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   return (
//     <nav
//       className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
//     >
//       <div className={styles.navbarContent}>
//         <div className={styles.logoContainer}>
//           <img src={logo} className={styles.navbarLogo} alt="My Company Logo" />
//           <h1 className={styles.navbarLogoText}>
//             Tiba Engineering & Contracting LLC
//           </h1>
//         </div>

//         <button className={styles.menuButton} onClick={toggleMenu}>
//           <span className={styles.menuIcon}></span>
//           <span className={styles.menuIcon}></span>
//           <span className={styles.menuIcon}></span>
//         </button>

//         <ul
//           className={`${styles.navbarLinks} ${menuOpen ? styles.showMenu : ""}`}
//         >
//           <li>
//             <a href="#overview">Overview</a>
//           </li>
//           <li>
//             <a href="#services">Services</a>
//           </li>
//           <li>
//             <a href="#vision">Vision & Values</a>
//           </li>
//           <li>
//             <a href="#projects">Projects</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//           <li>
//             <a
//               href="/profile"
//               onClick={(e) => {
//                 e.preventDefault();
//                 downloadProfile();
//               }}
//             >
//               Profile
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.js

import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import downloadProfile from "../../pages/DownloadProfile";
import styles from "./Navbar.module.css"; // Optional custom styles
import { useLocation } from 'react-router-dom'

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * (2 / 3);
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])


  return (
    <Navbar
      expand="lg"
      variant="light"
      fixed="top"
      className={`py-3 ${scrolled ? styles.navbarScrolled : styles.navbar}`}
      bg="white"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/#home" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span className="fw-bold">TIBA Engineering & Contracting LLC</span>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/#home"
            >
              Home
            </Nav.Link>
            <NavDropdown title="Overview" id="basic-nav-dropdown">
              <NavDropdown.Item href="/#overview" className={styles.navbardown}>
                Overview
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/#message"
                className={styles.navbardown}
              >
                MD's Message
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/#vision"
                className={styles.navbardown}
              >
                Vision & Mission
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/#coreValues"
                className={styles.navbardown}
              >
                Core Values
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/#services" className={styles.navbardown}>
                Services
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/#projects"
                className={styles.navbardown}
              >
                Projects
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/#clients"
                className={styles.navbardown}
              >
                Clients
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#about"
                className={styles.navbardown}
              >
                About Us
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/#contact">Contact</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/careers">Careers</Nav.Link>
            <Nav.Link
              href="/profile"
              onClick={(e) => {
                e.preventDefault();
                downloadProfile();
              }}
            >
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
