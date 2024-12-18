import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "/src/pages/PokemonPage.module.css";

const PokemonPage = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemon(response.data);
            } catch (error) {
                console.error("Error fetching pokemon:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!pokemon) return <p>Pokemon not found.</p>;

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
                <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
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
