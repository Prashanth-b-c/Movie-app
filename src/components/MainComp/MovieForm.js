import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

import {addMovie} from '../../Actions/movieActions'
import '../../styles/movieForm.css'

const MovieForm = (props) => {

    const dispatch = useDispatch()

    const [movie, setMovie] = useState('')
    const [rank, setRank] = useState('')

    const handleMovie = (e) => {
        setMovie(e.target.value)
    }

    const handleRank = (e) =>{
        setRank(e.target.value)
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        const movieObj= {
            id: Number(new Date()),
            movie: movie,
            rank: Number(rank)
        }
        //dispatch add movie action with movie object
       dispatch(addMovie(movieObj))
       setRank('')
       setMovie('')
    }

    return (
        <div className='movie-form-main-container'>
            <h3>Add Movie</h3>
                <form className='movie-form-container' onSubmit={handleSubmit}>
                    <input type='text' value={movie} onChange={handleMovie} placeholder= 'Enter movie name' /> <br />
                    <input type='text' value={rank} onChange={handleRank} placeholder= 'IMDB Ranking' /> <br />
                    <input className='btn' type='submit' value='Add' />
                </form>
        </div>
    )
}

export default MovieForm