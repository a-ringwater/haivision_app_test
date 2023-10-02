import React from "react";
import styles from './Landing.module.css';

const Landing: React.FC = () => {
    return (
        <div>
            <div>Hello World.</div>
            <div>Adrien Anodeau</div>
            <a
                href="https://github.com/a-ringwater/haivision_app_test"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repo_url}
            >
                Repo link here.
            </a>
        </div>
    )
}

export default Landing;
