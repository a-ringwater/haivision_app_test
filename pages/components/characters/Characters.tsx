import React, { useEffect, useState } from "react";
import CharactersList from "./CharactersList";
import Pagination from "../pagination/Pagination";
import useGetCharacters from "@/pages/hook/useGetCharacters";
import styles from './Characters.module.css';

const Characters: React.FC = () => {
    const [initialPageLoaded, setInitialPageLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const { characters, pagination, error } = useGetCharacters(currentPage);

    const handleNext = () => {
        if (pagination?.next) {
            const nextPage = new URL(pagination.next).searchParams.get("page");
            if (nextPage) {
                setCurrentPage(Number(nextPage));
            }
        }
    }

    const handlePrev = () => {
        if (pagination?.prev) {
            const prevPage = new URL(pagination.prev).searchParams.get("page");
            if (prevPage) {
                setCurrentPage(Number(prevPage));
            }
        }
    }

    useEffect(() => {
        const lastVisitedPage = localStorage.getItem('lastVisitedPage');
        if (lastVisitedPage) {
            setCurrentPage(Number(lastVisitedPage));
        }
        setInitialPageLoaded(true);
    }, []);

    useEffect(() => {
        if (initialPageLoaded) {
            localStorage.setItem('lastVisitedPage', String(currentPage));
        }
    }, [currentPage, initialPageLoaded]);

    if (error) return <p>Error: {error}</p>;

    return (
        <div className={styles.characters_wrapper}>
            <Pagination
                pagination={pagination}
                onNext={handleNext}
                onPrev={handlePrev}
                currentPage={currentPage}
            />
            <CharactersList characters={characters} />
        </div>
    );
}

export default Characters;
