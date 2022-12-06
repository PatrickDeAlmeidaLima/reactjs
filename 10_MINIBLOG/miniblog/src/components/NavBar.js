import styles from './NavBar.module.css'

import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive? (styles.active):(""))}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({ isActive }) => (isActive? (styles.active):(""))}>
                        Logar
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/register" className={({ isActive }) => (isActive? (styles.active):(""))}>
                        Cadastrar
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive? (styles.active):(""))}>
                        Sobre
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar