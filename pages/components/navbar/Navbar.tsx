import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(router.asPath)
    }, [router.asPath]);

    return (
        <nav className={styles.nav_wrapper}>
            <ul className={styles.nav_container}>
                <li>
                    <Link href="/" className={currentPath === '/' ? styles.active_section : ''}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/#characters" className={currentPath === '/#characters' ? styles.active_section : ''}>
                        Characters
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
