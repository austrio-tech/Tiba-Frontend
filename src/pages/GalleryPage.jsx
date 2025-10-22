import Navbar from "../components/Navbar/Navbar";
import Gallery from "../components/Gallery/Gallery";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import Hgap from "../utilities/headergap";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hgap />
      <div id="projects">
        <Projects />
      </div>
      <Gallery />
      <div id="about">
        <Footer />
      </div>
    </>
  );
};

export default Home;
