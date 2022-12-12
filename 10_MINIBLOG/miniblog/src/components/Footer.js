import styles from './Footer.module.css'

import React from 'react'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h3>Escreva sobre o que você tem interesse!</h3>
            <p>Mini Blog &copy; 2022</p>
        </footer>
    )
}

export default Footer