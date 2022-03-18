import React from 'react';
import styles from '../../css/Hero.module.css';

const Hero = ( { setSearch }) => {

  let onChange = (e) => {
    setSearch((e.target.value.length > 2) ? e.target.value : "");
  }

  return (
    <>
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <label className={styles.innerLabel} htmlFor="search">Find Your Favourite Movies </label>
        <input onChange={onChange} className={styles.innerSearchBar} type="text" name='search' placeholder='Try searching "Better Call Saul"' />
      </div>
    </div>
    </>
  )
}

export default Hero