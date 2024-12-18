import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '/src/pages/PokemonPage.module.css';

const PokemonPage = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => setPokemon(data));
    }, [id]);

    if (!pokemon) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            <h1>{pokemon.name}</h1>
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className={styles.image}
            />
            <div className={styles.details}>
                <p><strong>Height:</strong> {pokemon.height}</p>
                <p><strong>Weight:</strong> {pokemon.weight}</p>
                <p><strong>Base experience:</strong> {pokemon.base_experience}</p>
                <p><strong>Abilities:</strong></p>
                <ul>
                    {pokemon.abilities.map((ability, index) => (
                        <li key={index}>{ability.ability.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PokemonPage;
