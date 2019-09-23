import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer-section">
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
          <li>Cats</li>
          <li>Llama</li>
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
        <p>
          Papyrus &copy; 2019 - Built with NextJS - Illustrations by unDraw.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
