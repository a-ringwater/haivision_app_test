import React, { useEffect, useState } from "react";
import CharactersList from "./CharactersList";

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                const data = await response.json();
                if (isMounted) {
                    setCharacters(data.results);
                }
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An error has occurred.");
                }
            }
        }
        fetchData();
        return () => { isMounted = false; };
    }, []);

    if (error) return <p>Error: {error}</p>;

    return <CharactersList characters={characters} />
}

export default Characters;