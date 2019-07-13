import { createGlobalStyle } from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Discover from "../components/Discover";
import HowTo from "../components/HowTo";
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #FF775F;
        --primary-light: #FF9683;
        --primary-ligther: #FFB5A6;
        --primary-lightess: #FFD0C7;
        --white: #FFFFFF;
        --text-color: #535461;
    }
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html {
        font-size: 100%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <Header />
      <Discover />
      <HowTo />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
