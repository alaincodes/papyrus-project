import styled from "styled-components";

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
      color: #535461;
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
      overflow: hidden;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

function Discover() {
  return (
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
            I teach you my design with simple exemples and make your brand grow.
          </p>
          <div className="footer-card">
            <button>read</button>
          </div>
        </div>
        <div className="blog-post-card">
          <h2>Cats</h2>
          <p>Different tips I use to make my cat happier..</p>
          <div className="footer-card">
            <button>read</button>
          </div>
        </div>
        <div className="blog-post-card">
          <h2>Easy Food</h2>
          <p>
            Sometimes we don't have enough time to cook, here my fast and
            healthy recipe...
          </p>
          <div className="footer-card">
            <button>read</button>
          </div>
        </div>
        <div className="blog-post-card">
          <h2>Flash Cards JS</h2>
          <p>
            I made flash cards for JavaScript dev! Improve interview answers..
          </p>
          <div className="footer-card">
            <button>read</button>
          </div>
        </div>
      </div>
    </DiscoverPostBox>
  );
}

export default Discover;
