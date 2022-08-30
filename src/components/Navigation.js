import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : undefined;
    }

    return (
        <nav>
            <h1>React Breacking Bad</h1>
            <NavLink className={setNavStyle} to="/">Home</NavLink>
            <NavLink
                to="/characters"
                className={setNavStyle}
            >
                Characters
            </NavLink>
            <NavLink
                to="/episodes"
                className={setNavStyle}
            >
                Episodes
            </NavLink>
            <NavLink
                to="/quotes"
                className={setNavStyle}
            >
                Quotes
            </NavLink>
        </nav>
    );
}
