import {ReactComponent as SearchIcon} from './images/search-icon.svg';
import {ReactComponent as CloseIcon} from './images/close-icon.svg';
import styles from "./App.module.scss";
import "./App.css";

import photo from './images/photo.png';
import instagram from './images/instagram.png';
import behance from './images/behance.png';
import dribble from './images/dribble.png';

const App = () => (
    <div className={styles.mainBody}>
        <div className="search-box">
            <input type="text" placeholder="Search here..."/>
        </div>

        <div className={styles.navContainer}>
            <div className={styles.wrapper}>
                <div className="logo">D.</div>
                <ul className="nav-items">
                    <li>
                        <a href="#">blog</a>
                    </li>
                    <li>
                        <a href="#">contact</a>
                    </li>
                    <li>
                        <a href="#">about</a>
                    </li>
                    <li>
                        <a className="nav-btn-container" href="#">
                            <SearchIcon className="search-btn"/>
                            <CloseIcon className="close-btn"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="header-container">
            <div className="wrapper">

                <div className="hero-content">
                    <h1>Hi, I’m Darlene</h1>
                    <p>
                        I design beautiful websites & mobile apps that modern trends
                        demand
                    </p>
                    <a href="#">
                        Contact Me
                    </a>
                </div>

                <div className="hero-image">
                    <img src={photo} alt="photo"/>
                    <div className="photo-bg"></div>
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
    </div>
);

export default App;
