import React, { useState } from 'react'
import styles from '../../css/MobileMenu.module.css';



const MobileMenu = ( { setIsOpen } ) => {
    const [ sortIsOpen, setSortIsOpen ] = useState(false);


  return (
      <>
        <div className={styles.mobileMenu}>
        
            <div className={styles.mobileMenuHeader}>
                <div className={styles.mobileMenuLogo}>MovieHub</div>
                <div className={styles.closeButton} onClick={() => setIsOpen(false)}>X</div>
            </div>
            <div className={styles.mobileMenuItem}>
                <div className={styles.mobileMenuItemTitle}>Series</div>
                <div className={styles.mobileMenuItemTitle}>Movies</div>
                <div className={styles.mobileMenuItemTitle} onClick={() => {setSortIsOpen(!sortIsOpen)}}>Sort By (+)</div>
                {sortIsOpen && <div className={styles.mobileMenuItemContent}>
                    <div className={styles.mobileMenuItemContentItem}>Latest Releases</div>
                    <div className={styles.mobileMenuItemContentItem}>Oldest Releases</div>
                    <div className={styles.mobileMenuItemContentItem}>Alphabetical</div>
                    <div className={styles.mobileMenuItemContentItem}>Reverse Alphabetical</div>
                </div>}

            </div>

        </div>
      </>
  )
}

export default MobileMenu