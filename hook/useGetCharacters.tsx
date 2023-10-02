import { useState, useEffect } from 'react';

export interface PaginationData {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

const useGetCharacters = (page: number) => {
    const [characters, setCharacters] = useState<any[]>([]);
    const [pagination, setPagination] = useState<PaginationData>({
        count: 0,
        pages: 0,
        next: null,
        prev: null
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
                const data = await response.json();

                if (isMounted) {
                    setPagination(data.info);
                    setCharacters(data.results);
                }
            } catch (err) {
                if (isMounted) {
                    if (err instanceof Error) {
                        setError(err.message);
                    } else {
                        setError("An error has occurred.");
                    }
                }
            }
        }
        fetchData();
        return () => { isMounted = false; };
    }, [page]);

    return { characters, pagination, error };
}

export default useGetCharacters;
