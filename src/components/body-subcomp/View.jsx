import React, { useState, useEffect } from 'react'
import styles from '../../css/View.module.css';
import Card from './Card';

// import { functions } from '../../api-functions';

const View = ( {search, filter, setFilter}) => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
      const route = {
        "All Results": "all-results",
        "First 30 since 2010": "top30",
        "Series": "series",
        "Movies": "movies",
        "Latest Releases": "latest",
        "Oldest Releases": "classics",
        "Alphabetical": "alphabetical",
        "Reverse Alphabetical": "reverse-alphabetical"
      }
    
        fetch(`http://127.0.0.1:5000/${route[filter]}`).then(response => {console.log(response); return response.json()})
        .then(data => {setMovieData(data); console.log(data)});

        console.log(filter)
    
      }, [filter])

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