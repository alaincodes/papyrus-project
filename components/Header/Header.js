import "./Header.scss";

function Header() {
  return (
    <header className="header-section">
      <div className="header-title">
        <h1>Write and Share</h1>
        <h2>Flashcard like.</h2>
        <button>Start posting</button>
      </div>
      <img src="/static/blogging-img.svg" alt="blogging image" />
    </header>
  );
}

export default Header;
