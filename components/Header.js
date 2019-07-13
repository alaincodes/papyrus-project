import styled from "styled-components";

const HeaderLanding = styled.header`
  display: flex;
  height: 70vh;
  justify-content: space-evenly;
  align-items: center;
  max-width: 900px;
  margin: auto;
  .header-title {
    color: #535461;
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

function Header() {
  return (
    <HeaderLanding>
      <div className="header-title">
        <h1>Write and Share</h1>
        <h2>Less than 120 words.</h2>
        <button>Start posting</button>
      </div>
      <img src="/static/blogging-img.svg" alt="blogging image" />
    </HeaderLanding>
  );
}

export default Header;
