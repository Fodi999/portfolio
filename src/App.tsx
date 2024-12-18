import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <header className="container">
          <h1>Sushi Master</h1>
        </header>

        <main className="container">
          {/* Рендер страниц */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Контейнер кнопок */}
        <div className="footer-buttons">
          <Link to="/" className="button">
          Dom
          </Link>
          <Link to="/recipes" className="button">
          Przepisy
          </Link>
          <Link to="/contact" className="button">
          Skontaktuj się ze mną
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default App;









