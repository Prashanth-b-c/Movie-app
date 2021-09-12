import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './Store/configureStore'
import {Provider} from 'react-redux'
import '././index.css'

const store = configureStore()
console.log('state', store.getState())

store.subscribe(()=> {
    console.log('state updated', store.getState())
})

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
