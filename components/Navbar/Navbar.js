import Link from "next/link";
import "./Navbar.scss";

function Navbar() {
  return (
    <header className="navbar-section">
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
        </ul>
      </nav>
      <button>Sign in</button>
    </header>
  );
}

export default Navbar;
