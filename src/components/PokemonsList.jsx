import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '/src/pages/PokemonsList.module.css';

const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then((response) => response.json())
            .then((data) => setPokemons(data.results));
    }, []);

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
