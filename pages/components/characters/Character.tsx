import React from "react";
import Image from 'next/image';
import styles from './Character.module.css';

interface Origin {
    name: string;
    url: string;
}

interface Character {
    id: number;
    name: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin?: Origin;
    location?: Origin;
    image: string;
    episode?: string[];
    url?: string;
    created?: string;
}

const Character: React.FC<Character> = ({ id, name, image }) => {
    const handleClick = async (id: number): Promise<void> => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            if (error instanceof Error) {
                console.error("There was a problem:", error.message);
            } else {
                console.error("There was an unknown problem:", error);
            }
        }
    }

    return (
        <div className={styles.item_wrapper} onClick={() => handleClick(id)}>
            <Image src={image} alt={name} width={100} height={100} style={{ borderRadius: '50%' }} />
            <div className={styles.item_name}>{name}</div>
        </div>
    )
}

export default Character;