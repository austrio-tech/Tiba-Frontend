import Navbar from "../components/Navbar/Navbar";
import Careers from '../components/Careers/Careers';
import Footer from "../components/Footer/Footer";
import Hgap from "../utilities/headergap";
const Home = () => {
  return (
    <>
    
      <Navbar />
      <Hgap />
      <Careers />
      <div id="about">
      <Footer />
      </div>
    </>
  );
};

export default Home;
