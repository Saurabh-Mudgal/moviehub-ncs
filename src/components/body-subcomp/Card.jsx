import React from 'react'
import styles from '../../css/Card.module.css';


const Card = ( {movieData, searchFilter}) => {
  const movieList = movieData.entries
  const viewFilteredCards = movieList.filter(data => {
    return data.title.toLowerCase().includes(searchFilter.toLowerCase())
  })

  // for (let j = 0; j < restaurants.length; j++) {
  //   for (let i = 0; i < restaurants[j].restaurantCuisine.length; i++) {
  //     if (restaurants[j].restaurantCuisine[i].toLowerCase().includes(searchFilter.toLowerCase())) {
  //       viewFilteredCards.push(restaurants[j])
  //     }
  //   }
  // }

  const renderCard = (searchFilter) ? viewFilteredCards : movieList;

  const viewCards = renderCard.map((data, i) => {
    return (
        <div className={styles.cardContainer} key={i}>
          <div className={styles.cardPic}><img src={data.images["Poster Art"].url} alt="Movie Card" /></div>
          <div className={styles.cardDescription}>
            <div className={styles.cardType}>{data.programType}</div>
            <div className={styles.cardYear}>{(data.releaseYear) ? data.releaseYear : null}</div>
          </div>
          <div className={styles.cardName}>{data.title}</div>
        </div>
    )
    }
  )

  return (
    <div className={styles.view}>
      {viewCards}
    </div>
)
}

export default Card