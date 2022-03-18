import React, { useState } from 'react'
import styles from '../../css/MobileMenu.module.css';



const MobileMenu = ( { setIsOpen, setFilter } ) => {
    const [ sortIsOpen, setSortIsOpen ] = useState(false);


  return (
      <>
        <div className={styles.mobileMenu}>
        
            <div className={styles.mobileMenuHeader}>
                <div className={styles.mobileMenuLogo}>MovieHub</div>
                <div className={styles.closeButton} onClick={() => setIsOpen(false)}>X</div>
            </div>
            <div className={styles.mobileMenuItem}>
                <div className={styles.mobileMenuItemTitle} onClick={() => {setFilter("Series"); setIsOpen(false)}}>Series</div>
                <div className={styles.mobileMenuItemTitle} onClick={() => {setFilter("Movies"); setIsOpen(false)}}>Movies</div>
                <div className={styles.mobileMenuItemTitle} onClick={() => {setSortIsOpen(!sortIsOpen)}}>Sort By (+)</div>
                {sortIsOpen && <div className={styles.mobileMenuItemContent}>
                    <div className={styles.mobileMenuItemContentItem} onClick={() => {setFilter("Latest Releases"); setIsOpen(false)}}>Latest Releases</div>
                    <div className={styles.mobileMenuItemContentItem} onClick={() => {setFilter("Oldest Releases"); setIsOpen(false)}}>Oldest Releases</div>
                    <div className={styles.mobileMenuItemContentItem} onClick={() => {setFilter("Alphabetical"); setIsOpen(false)}}>Alphabetical</div>
                    <div className={styles.mobileMenuItemContentItem} onClick={() => {setFilter("Reverse Alphabetical"); setIsOpen(false)}}>Reverse Alphabetical</div>
                </div>}

            </div>

        </div>
      </>
  )
}

export default MobileMenu