import React, { useState } from 'react'
import styles from '../css/Header.module.css';
import MobileMenu from './header-subcomp/MobileMenu';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className={styles.navBar}>
        <div className={styles.logo}>MovieHub</div>
        <div className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </div>
        <div className={styles.navLinks}>
            <ul>
                <li className={styles.navIcon} key={1}>Series</li>
                <li className={styles.navIcon} key={2}>Movies</li>
                <li className={styles.navIcon} key={3}>Sort By (+)</li>
            </ul>
        </div>
    </div>
    {isOpen && <MobileMenu />}
    </>
  )
}

export default Header