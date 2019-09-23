import "./Discover.scss";

function Discover() {
  return (
    <section className="section-discover">
      <div>
        <h1>Most read posts of this week.</h1>
      </div>
      <div className="blog-post-grid">
        <div className="blog-post-card">
          <h2>Improve Lifestyle</h2>
          <p>Here are my tips to improve your life and be productive..</p>
        </div>
        <div className="blog-post-card">
          <h2>JavaScript Tips 101</h2>
          <p>Most useful JavaScript tips to help you write cleaner code!</p>
        </div>
        <div className="blog-post-card">
          <h2>Nice Design</h2>
          <p>
            I teach you my design with simple exemples and make your brand grow.
          </p>
        </div>
        <div className="blog-post-card">
          <h2>Cats</h2>
          <p>Different tips I use to make my cat happier.. hihihii</p>
        </div>
        <div className="blog-post-card">
          <h2>Easy Food</h2>
          <p>
            Sometimes we don't have enough time to cook, here my fast and
            healthy recipe...
          </p>
        </div>
        <div className="blog-post-card">
          <h2>Flash Cards JS</h2>
          <p>
            I made flash cards for JavaScript dev! Improve interview answers..
          </p>
        </div>
      </div>
    </section>
  );
}

export default Discover;
