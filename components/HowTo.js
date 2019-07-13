import styled from "styled-components";

const SectionBox = styled.section`
  height: 70vh;
  background: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 900px;
  margin: auto;
  color: #ff775f;
  img {
    width: 400px;
  }
  h1 {
    margin: 1rem auto;
    font-size: 2rem;
  }
  ul {
    list-style-type: none;
    li {
      font-size: 1.6rem;
      font-weight: 500;
      color: #535461;
    }
  }
`;

function HowTo() {
  return (
    <SectionBox>
      <img src="../static/typewriter-img.svg" alt="" />
      <div>
        <h1>Made for small posts !</h1>
        <ul>
          <li>Write & Post.</li>
          <li>Publish or Save.</li>
          <li>Find and Discover posts.</li>
          <li>Share and Follow bloggers.</li>
          <li>Always less than 120 words.</li>
        </ul>
      </div>
    </SectionBox>
  );
}

export default HowTo;
