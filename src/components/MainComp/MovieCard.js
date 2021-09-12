import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteMovieCard} from '../../Actions/movieActions'
import '../../styles/movieCard.css'
import movieReel from '../../images/movieReel.jpg'
import { FaTrash } from 'react-icons/fa'

const MovieCard = (props) => {

    const {id, movie, rank} = props

    const dispatch = useDispatch()

    const handleRemove = () => {
        const confirmation=window.confirm("Please confirm movie removal")
            if(confirmation){
                dispatch(deleteMovieCard(id))
            }
    }

    return (
        <div className='movie-card-main-flex'>
            <div className='movie-card-item'>
                <img src={movieReel} alt="" />
                
                    <h3>{movie} - #{rank}</h3>
                    <button onClick={handleRemove}><FaTrash /></button>
                
            </div>
        </div>
    )
}

export default MovieCard