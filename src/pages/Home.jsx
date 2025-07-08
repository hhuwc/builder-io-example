import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <nav className="navigation">
        <Link to="/" className="nav-link active">
          Home
        </Link>
        <Link to="/cocktail" className="nav-link">
          Cocktail
        </Link>
      </nav>

      <div className="home-content">
        <h1>Hello World!</h1>
        <p>The app is now running successfully on port 3000.</p>
        <p>Navigate to the cocktail page to see our menu!</p>

        <Link to="/cocktail" className="cta-button">
          View Cocktails 🍹
        </Link>
      </div>
    </div>
  );
}

export default Home;
