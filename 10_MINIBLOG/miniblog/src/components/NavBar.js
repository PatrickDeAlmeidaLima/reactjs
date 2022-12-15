import styles from './NavBar.module.css';

import { useAuthentication } from '../hooks/useAuthentication';

import { UseAuthValue } from '../context/AuthContext';

import { NavLink } from "react-router-dom";

const NavBar = () => {

    const { user } = UseAuthValue();
    const { logout } = useAuthentication();

    return (
        <div className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? (styles.active) : (""))}>
                        Home
                    </NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? (styles.active) : (""))}>
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? (styles.active) : (""))}>
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <NavLink to="/posts/create" className={({ isActive }) => (isActive ? (styles.active) : (""))}>
                                Novo posts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? (styles.active) : (""))}>
                                Dashboard
                            </NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? (styles.active) : (""))}>
                        Sobre
                    </NavLink>
                </li>
                {user && (
                    <li>
                        <button onClick={logout} >Sair</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default NavBar