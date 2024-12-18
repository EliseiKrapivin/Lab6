import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "/src/pages/PokemonsList.module.css";

const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
                setPokemons(response.data.results);
            } catch (error) {
                console.error("Error fetching pokemons:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            <h1>Pokemons List</h1>
            <ul className={styles.pokemonList}>
                {pokemons.map((pokemon, index) => (
                    <li key={index} className={styles.pokemonItem}>
                        <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonsList;
