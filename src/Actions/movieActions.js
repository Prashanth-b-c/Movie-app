export const addMovie=(movieObj)=>{
    return{
        type: 'ADD_MOVIE',
        payload: movieObj
    }
}

export const deleteMovieCard = (movieId) => {
    return {
        type: 'DELETE_MOVIE',
        payload:movieId
    }
}

export const ascending = () => {
    return {
        type: 'ASCENDING'
    }
}

export const descending = () => {
    return {
        type: 'DESCENDING' 
    }
}

export const ascNum = () => {
    return {
        type: 'ASC_NUM' 
    }
}

export const descNum=() => {
    return {
        type : 'DESC_NUM'
    }
}