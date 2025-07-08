import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cocktail from "./pages/Cocktail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktail" element={<Cocktail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
