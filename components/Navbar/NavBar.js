import { useState } from 'react';
import { MenuList } from "./MenuList";
import SignupButton from "./Items/SignupButton";
import NavLink from "./Items/NavLink";
import styles from './NavBar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(clicked => !clicked);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={clicked ? faTimes : faBars}></FontAwesomeIcon>
                </div>
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuList.map((item, index) => {
                        return (
                            <li key={index} className={styles.li}>
                                <NavLink title={item.title} url={item.url} />
                            </li>
                        )
                    })}
                </ul>
                <SignupButton url={'/signup'} />
            </div>
        </nav>
    );
}

export default NavBar;