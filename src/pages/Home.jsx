import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SpotlightImage from "../components/Spotlight/SpotlightImage";
import Carousel from "../components/Carousel/Carousel";
import Overview from "../components/Overview/Overview";
import Message from "../components/MDsMessage/Message";
import Services from "../components/Services/Services";
import VisionMission from "../components/VisionMission/VisionMission";
import Machinery from "../components/Machinery/Machinery";
import Projects from "../components/Projects/Projects";
import Clients from "../components/Clients/Clients";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";

import styles from "./page.module.css";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      <SpotlightImage />
      <div id="overview">
        <Overview />
      </div>
      <div id="message" className={`${styles.bg1} ${styles.pd1}`}>
        <Message />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="vision">
        <VisionMission />
      </div>
      <Machinery />
      <div id="projects">
        <Projects />
      </div>
      <div id="clients">
      <Clients />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <div id="about">
      <Footer />
      </div>
    </>
  );
};

export default Home;
