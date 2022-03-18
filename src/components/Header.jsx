import React, { useState } from 'react'
import styles from '../css/Header.module.css';
import { MobileMenu, LaptopMenu } from './header-subcomp';


const Header = ({ setFilter }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);
  return (
    <>
    <div className={styles.navBar}>
        <div className={styles.logo}>MovieHub</div>
        <div className={styles.toggleButton} onClick={() => setIsOpen(true)}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </div>
        <div className={styles.navLinks}>
            <ul>
                <li className={styles.navIcon} key={1} onClick={() => {setFilter("Series")}} >Series</li>
                <li className={styles.navIcon} key={2} onClick={() => {setFilter("Movies")}}>Movies</li>
                <li className={styles.navIcon} key={3} onClick={() => {setIsDropdown(!isDropdown)}}>Sort By {(isDropdown) ? "(-)" : "(+)"}</li>
            </ul>
        </div>
    </div>
    {isOpen && <MobileMenu setIsOpen={setIsOpen} setFilter={setFilter} />}
    {isDropdown && <LaptopMenu setIsDropdown={setIsDropdown} setFilter={setFilter} />}
    </>
  )
}

export default Header