//rfce
import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom'

function MovieCard( movie ) {
    const { id, title, year, poster } = movie
  return (
    <div>
        <Link to={`/movie/${id}`}>
           <div className='card-item'>
             <div className='card-inner'>
                <div className='card-top'>
                    <img src={poster} alt={title} />
                </div>
                <div className='card-bottom'>
                    <div className='card-info'>
                        <h4>{title}</h4>
                        <p>{year}</p>
                    </div>
                </div>
             </div>
           </div>
        </Link>
    </div>
  )
}

export default MovieCard