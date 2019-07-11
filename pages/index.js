import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Link from "next/link";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #FF775F;
        --primary-light: #FF9683;
        --primary-ligther: #FFB5A6;
        --primary-lightess: #FFD0C7;
        --white: #FFFFFF;
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

const Navbar = styled.header`
  height: 9vh;
  background: var(--primary-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  h1 {
    color: white;
    cursor: pointer;
  }
  nav {
    ul {
      list-style-type: none;
      display: flex;
      a {
        text-decoration: none;
        padding: 1rem;
        font-size: 1.1rem;
        color: #ffffff;
        transition: all 0.2s ease-in;
        &:hover {
          color: var(--primary-lightess);
        }
      }
      input[type="search"] {
        background: transparent;
        border-radius: 3px;
        color: white;
        border: 1px solid white;
        width: 120px;
        height: 3vh;
        padding: 0.2rem;
      }
    }
  }
  button {
    background: transparent;
    border: 1px solid var(--white);
    color: var(--white);
    padding: 0.6rem;
    border-radius: 0 30%;
    transition: all 0.2s ease-in;
    &:hover {
      cursor: pointer;
      background: white;
      color: var(--primary-color);
    }
  }
`;

const Header = styled.header`
  display: flex;
  height: 70vh;
  justify-content: space-evenly;
  align-items: center;
  max-width: 900px;
  margin: auto;
  .header-title {
    color: #ff775f;
    padding: 0 1rem;
    button {
      background: transparent;
      border-radius: 4px;
      padding: 0.4rem;
      margin: 1rem 0;
      border: 1px solid #ff775f;
      color: #ff775f;
      transition: all 0.3s ease-out;
      &:hover {
        color: white;
        background: #ff775f;
        cursor: pointer;
      }
    }
  }
  img {
    width: 400px;
    padding: 1rem;
    filter: drop-shadow(0px 5px 3px rgba(0, 0, 0, 0.589));
  }
`;

const DiscoverPostBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #ff775f;
  height: 70vh;
  color: white;
  h1 {
    font-size: 2rem;
    margin: 1rem auto;
  }
  .blog-post-grid {
    max-width: 1200px;
    margin: 1rem auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    .blog-post-card {
      color: #ff775f;
      height: 200px;
      min-width: 300px;
      background: white;
      border: 1px solid white;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      overflow: hidden;
      position: relative;
      filter: drop-shadow(0px 5px 3px rgba(0, 0, 0, 0.589));
      h2 {
        margin: 1rem auto;
      }
      button {
        background: transparent;
        color: #ff775f;
        border-radius: 2.5px;
        padding: 0.4rem 0.7rem;
        margin: 1rem auto;
        border: 1px solid #ff775f;
        cursor: pointer;
        transition: all 0.2s ease-out;
        &:hover {
          background: #ff775f;
          color: white;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .blog-post-grid {
      overflow: hidden;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 768px) {
    .blog-post-grid {
      overflow: scroll;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const AboutUs = styled.section`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Footer = styled.footer`
  height: 30vh;
  background: #ff775f;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ul {
      list-style-type: none;
      padding: 0.9rem;
    }
    li:first-child {
      font-size: 1.1rem;
      font-weight: bold;
      padding-bottom: 0.5rem;
    }
  }
`;

function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar>
        <h1>Papyrus</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/addpost">
                <a>New Post</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <input type="search" placeholder="search post.." />
            </li>
          </ul>
        </nav>
        <button>Sign in</button>
      </Navbar>
      <Header>
        <div className="header-title">
          <h1>Write and Share</h1>
          <h2>Less than 120 words.</h2>
          <button>Start posting</button>
        </div>
        <img src="/static/blogging-img.svg" alt="blogging image" />
      </Header>
      <DiscoverPostBox>
        <div>
          <h1>Most read posts of this week.</h1>
        </div>
        <div className="blog-post-grid">
          <div className="blog-post-card">
            <h2>Improve Lifestyle</h2>
            <p>Here are my tips to improve your life and be productive..</p>
            <div className="footer-card">
              <button>read</button>
            </div>
          </div>
          <div className="blog-post-card">
            <h2>JavaScript Tips 101</h2>
            <p>Most useful JavaScript tips to help you write cleaner code!</p>
            <div className="footer-card">
              <button>read</button>
            </div>
          </div>
          <div className="blog-post-card">
            <h2>Nice Design</h2>
            <p>
              I teach you my design with simple exemples and make your brand
              grow.
            </p>
            <div className="footer-card">
              <button>read</button>
            </div>
          </div>
        </div>
      </DiscoverPostBox>
      <AboutUs>
        <h1>About Us</h1>
        <p>start posting now</p>
      </AboutUs>
      <Footer>
        <div className="footer-grid">
          <ul>
            <li>Education and Support</li>
            <li>FAQ</li>
            <li>Course</li>
          </ul>
          <ul>
            <li>Popular Topics</li>
            <li>Lifestyle</li>
            <li>JavaScript</li>
            <li>GatsbyJS</li>
            <li>NextJS</li>
            <li>ReactJS</li>
          </ul>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Code of Conduct</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>Follow Us</li>
            <li>Instagram</li>
            <li>Github</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div>
          <p>Alain Tran 2019 - Built with NextJS.</p>
        </div>
      </Footer>
    </React.Fragment>
  );
}

export default Home;
