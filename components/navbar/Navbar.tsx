import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const [currentSection, setCurrentSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const charactersElement = document.getElementById('characters');
            if (charactersElement && window.scrollY >= charactersElement.offsetTop) {
                setCurrentSection('characters');
            } else {
                setCurrentSection('home');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={styles.nav_wrapper}>
            <ul className={styles.nav_container}>
                <li>
                    <Link href="/#home" className={currentSection  === 'home' ? styles.active_section : ''} scroll={false}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/#characters" className={currentSection  === 'characters' ? styles.active_section : ''} scroll={false}>
                        Characters
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
