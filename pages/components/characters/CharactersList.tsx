import React from "react";
import Character from "./Character";
import styles from './CharactersList.module.css';

interface CharactersListProps {
    characters: { id: number, name: string, image: string }[];
}

const CharactersList: React.FC<CharactersListProps> = ({ characters }) => (
    <div className={styles.grid_wrapper}>
        {characters.map(character => (
            <Character key={character.id} id={character.id} name={character.name} image={character.image} />
        ))}
    </div>
);

export default CharactersList;
