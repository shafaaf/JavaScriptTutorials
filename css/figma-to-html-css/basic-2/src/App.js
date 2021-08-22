import {ReactComponent as SearchIcon} from './images/search-icon.svg';
import {ReactComponent as CloseIcon} from './images/close-icon.svg';
import styles from "./App.module.scss";
import "./App.css";

import photo from './images/photo.png';
import instagram from './images/instagram.png';
import behance from './images/behance.png';
import dribble from './images/dribble.png';

const App = () => (
    <div className={styles.fullContainer}>
        <div className={styles.searchBox}>
            <input type="text" placeholder="Search here..."/>
        </div>

        <div className={styles.navContainer}>
            <div className={styles.wrapper}>
                <div className={styles.navLogo}>D.</div>
                <ul className={styles.navUnorderedList}>
                    <li className={styles.navListItems}>
                        <a className={styles.navListItemsLinks} href="#">blog</a>
                    </li>
                    <li className={styles.navListItems}>
                        <a className={styles.navListItemsLinks} href="#">contact</a>
                    </li>
                    <li className={styles.navListItems}>
                        <p className={styles.navListItemsLinks} href="#">about</p>
                    </li>
                    <li className={styles.navListItems}>
                        <a className={styles.navListItemsLinks} href="#">
                            <SearchIcon />
                            <CloseIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className={styles.mainContentContainer}>
            <div className={styles.authorContent}>
                <div>
                    <h1 className={styles.authorHeader}>Hi, I’m Darlene</h1>
                    <p className={styles.authorPara}>
                        I design beautiful websites & mobile apps that modern trends
                        demand
                    </p>
                    <button className={styles.authorContact}>
                        Contact Me
                    </button>
                </div>
                <div className="hero-image">
                    <img src={photo} alt="photo"/>
                    <div className="photo-bg"></div>
                </div>
            </div>

            <div className="social-icons">
                <a href="#">
                    <img src={instagram} alt="instagram"/>
                </a>
                <a href="#">
                    <img src={behance} alt="behance"/>
                </a>
                <a href="#">
                    <img src={dribble} alt="dribble"/>
                </a>
            </div>

        </div>


    </div>
);

export default App;
