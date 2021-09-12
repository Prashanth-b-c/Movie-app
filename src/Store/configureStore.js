import {createStore, combineReducers} from 'redux'
import movieReducer from '../Reducers/movieReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        movie:movieReducer
    }))
    return store
}

export default configureStore