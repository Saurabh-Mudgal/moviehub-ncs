import React, { useState, useEffect } from 'react'
import styles from '../../css/View.module.css';
import Card from './Card';

// import { functions } from '../../api-functions';

const View = ( {search, filter, setFilter}) => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
    
        fetch('https://movies-saurabh2.free.beeceptor.com/all-movies').then(response => {
          return response.json();
        }
        ).then(data => {setMovieData(data);})
    
      }, [])

  return (
    <>
        <div className={styles.viewContainer}>
            <div className={styles.viewHeader}>
                <div className={styles.title}><span className={styles.decor}>Now Showing:</span><em> {filter}</em></div>
                <div onClick={() => {setFilter("First 30 since 2010")}} className={styles.resetButton}>(<u>Reset filters to default</u>)</div>
            </div>
            <div className={styles.viewBody}>
                <Card movieData={movieData} searchFilter={search} />
            </div>
        </div>
    </>
  )
}

export default View