import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {ascending,descending, ascNum, descNum} from '../../Actions/movieActions'
import '../../styles/movieList.css'

import MovieCard from './MovieCard'

const MoviesList = (props) => {
    const [text, setText] = useState('')
    const [sort, setSort] = useState('')

    const dispatch=useDispatch()

    const movies = useSelector((state) => {
        return state.movie
    })
   
    localStorage.setItem('movie', JSON.stringify(movies))

    const handleChange =(e) => {
        const result = e.target.value
        setText(result)
    }

    const searchedMovies=() => {
        return movies.filter((ele)=> {
            return ele.movie.includes(text.toLowerCase())
        })
    }

    const handleSortChange =(e) => {
        const result = e.target.value
        setSort(result)
        if(result === 'ascending') {
            dispatch(ascending())
        } else if(result === 'descending') {
            dispatch(descending())
        } else if(result === 'ascNum') {
            dispatch(ascNum())
        } else if(result === 'descNum') {
            dispatch(descNum())
        }
    }

    return (
        <div className='movie-list-container'>
            <form className='form-control-movielist'>
                <input type="text" placeholder='search by name' value={text} onChange={handleChange} />
                <select value={sort} onChange={handleSortChange}>
                    <option value=''>order by</option>
                    <option value='ascending'>ascending</option>
                    <option value='descending'>descending</option>
                    <option value='ascNum'>ascNum</option>
                    <option value='descNum'>descNum</option>
                </select>
            </form>
            { searchedMovies().map((ele)=>{
                return ( <MovieCard key={ele.id}  {...ele} /> )
            })}
        </div>
    )
}

export default MoviesList