import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonsList from "./components/PokemonsList";
import PokemonPage from "./components/PokemonPage";
import "./App.css";  // Импортируем глобальные стили

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PokemonsList />} />
                <Route path="/pokemon/:id" element={<PokemonPage />} />
            </Routes>
        </Router>
    );
};

export default App;
