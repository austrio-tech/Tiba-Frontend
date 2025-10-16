import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SpotlightImage from "../components/Spotlight/SpotlightImage";
import Carousel from "../components/Carousel/Carousel";
import Overview from "../components/Overview/Overview";
import Services from "../components/Services/Services";
import VisionMission from "../components/VisionMission/VisionMission";
import Machinery from "../components/Machinery/Machinery";
import Projects from "../components/Projects/Projects";
import Clients from "../components/Clients/Clients";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      <SpotlightImage />
      <div id="overview">
        <Overview />
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
      <Clients />
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Home;
