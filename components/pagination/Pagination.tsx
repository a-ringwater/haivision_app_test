import React from "react";
import { PaginationData } from '../../hook/useGetCharacters';
import styles from './Pagination.module.css';

interface PaginationProps {
    pagination: PaginationData;
    onNext: () => void;
    onPrev: () => void;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ pagination, onNext, onPrev, currentPage }) => {
    return (
        <div className={styles.pagination_wrapper}>
            <button className={styles.pagination_btn} disabled={!pagination.prev} onClick={onPrev}>
                {`${`<`} Prev`}
            </button>
            <div className={styles.currentPage}>Page {currentPage}</div>
            <button className={styles.pagination_btn} disabled={!pagination.next} onClick={onNext}>
                {`Next ${`>`}`}
            </button>
        </div>
    )
}

export default Pagination;
