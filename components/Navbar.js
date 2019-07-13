import Link from "next/link";
import styled from "styled-components";

const NavLinks = styled.header`
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

function Navbar() {
  return (
    <NavLinks>
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
    </NavLinks>
  );
}

export default Navbar;
