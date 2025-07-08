import { Link } from "react-router-dom";
import "./Cocktail.css";

function Cocktail() {
  return (
    <div className="cocktail-page">
      <nav className="navigation">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/cocktail" className="nav-link active">
          Cocktail
        </Link>
      </nav>

      <div className="cocktail-content">
        <h1>🍹 Cocktail Menu</h1>
        <p>Welcome to our cocktail collection!</p>

        <div className="cocktail-grid">
          <div className="cocktail-card">
            <h3>Mojito</h3>
            <p>Fresh mint, lime, white rum, and soda water</p>
            <span className="price">$12</span>
          </div>

          <div className="cocktail-card">
            <h3>Old Fashioned</h3>
            <p>Bourbon, sugar, bitters, and orange peel</p>
            <span className="price">$14</span>
          </div>

          <div className="cocktail-card">
            <h3>Margarita</h3>
            <p>Tequila, lime juice, and triple sec</p>
            <span className="price">$13</span>
          </div>

          <div className="cocktail-card">
            <h3>Cosmopolitan</h3>
            <p>Vodka, cranberry juice, lime, and triple sec</p>
            <span className="price">$15</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
