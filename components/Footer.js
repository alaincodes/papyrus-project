import styled from "styled-components";

const FooterSection = styled.footer`
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
    border-bottom: 1px solid white;
    padding-bottom: 1rem;
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
  p {
    font-size: 0.8rem;
  }
`;

function Footer() {
  return (
    <FooterSection>
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
    </FooterSection>
  );
}

export default Footer;
