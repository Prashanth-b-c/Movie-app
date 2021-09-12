import  _ from 'lodash'

const movieInitialState = JSON.parse(localStorage.getItem('movie')) || []

const movieReducer = (state = movieInitialState, action) => {
    switch(action.type) {
        case 'ADD_MOVIE' : {
            return [...state, {...action.payload}]
        }

        case 'DELETE_MOVIE' : {
            return state.filter((movie) =>movie.id!==action.payload)
        }

        case 'ASCENDING' : {
            return _.orderBy(state, ['movie'], ['asc'])
        }

        case 'DESCENDING' : {
            return _.orderBy(state, ['movie'], ['desc'])
        }

        case 'ASC_NUM' : {
            return _.orderBy(state, ['rank'], ['asc'])
        }

        case 'DESC_NUM' : {
            return _.orderBy(state, ['rank'], ['desc'] )
        }

        default: {
            return [...state]
        }
    }
    
}

export default movieReducer