import React from 'react'

import MovieStats from './MovieStats'
import MovieForm from './MovieForm'
import MoviesList from './MoviesList'
import '../../styles/movieContainer.css'

const MoviesContainer = (props) => {
    return (
        <div>
            <h1 style={{textAlign:'center', marginBottom:'40px', color:'graphite black'}}> My Movie List App</h1>
            <div style={{display:"flex", justifyContent:"space-around",alignContent:"center"}}>
                <div className='leftside-container'> 
                    <MoviesList />
                </div>
                <div className='aside-container'>
                    <MovieForm />
                    <MovieStats />
                </div>
            </div>
        </div>    
    )
}
 
export default MoviesContainer