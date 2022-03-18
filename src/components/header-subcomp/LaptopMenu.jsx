import React from 'react'
import styles from '../../css/LaptopMenu.module.css'

const LaptopMenu = ({ setIsDropdown, setFilter }) => {
  return (
    <div className={styles.container}>
        <div className={styles.laptopMenuItemContentItem} onClick={() => {setFilter("Latest Releases"); setIsDropdown(false)}}>Latest Releases</div>
        <div className={styles.laptopMenuItemContentItem} onClick={() => {setFilter("Oldest Releases"); setIsDropdown(false)}}>Oldest Releases</div>
        <div className={styles.laptopMenuItemContentItem} onClick={() => {setFilter("Alphabetical"); setIsDropdown(false)}}>Alphabetical</div>
        <div className={styles.laptopMenuItemContentItem} onClick={() => {setFilter("Reverse Alphabetical"); setIsDropdown(false)}}>Reverse Alphabetical</div>
    </div>
  )
}

export default LaptopMenu