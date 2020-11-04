import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.css';
import './normalize.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import productListReducer from './reducers/productListReducer';
import productItemReducer from './reducers/productItemReducer';
import thunk from 'redux-thunk';

const initialState = {}
const reducer = combineReducers({
    products: productListReducer,
    product: productItemReducer,
    
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <React.StrictMode>
    < Provider store={store}>
    <App />
    </ Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
