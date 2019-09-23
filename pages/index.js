import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Discover from "../components/Discover/Discover";
import HowTo from "../components/HowTo/HowTo";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Discover />
      <HowTo />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
