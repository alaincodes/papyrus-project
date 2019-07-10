import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

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

function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar>
        <h1>Papyrus</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New Post</a>
            </li>
            <li>
              <input type="search" placeholder="search post.." />
            </li>
          </ul>
        </nav>
        <button>Sign in</button>
      </Navbar>
    </React.Fragment>
  );
}

export default Home;
