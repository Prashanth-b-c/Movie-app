import React from 'react'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import '../../styles/movieStats.css'


const MovieStats = (props) => {

    const moviesCount = useSelector((state) => {
        return state.movie
    })

    const maxRatedMovie = () => {
        const res = _.maxBy(moviesCount, 'rank')
        return `${res.movie} - ${res.rank}`
    }

    return (
        <div className='movie-stats-main-container'>
            <h2 style={{marginBottom:'20px'}}>Movie Stats</h2>
            {/* <h4> Total Movies - {moviesCount.length}</h4> */}
            <h4>#{moviesCount.length && maxRatedMovie()}</h4>
        </div>
    )
}

export default MovieStats