
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import productListReducer from './reducers/productListReducer';
import productItemReducer from './reducers/productItemReducer';
import cartReducer from './reducers/cartReducer';
import signinReducer from './reducers/signinReducer';
import saveProductReducer from './reducers/saveProductReducer'
import thunk from 'redux-thunk';
import Cookie from 'js-cookie'

const cartItems = Cookie.getJSON('cartItems') || [] // Local storage?
const userData = Cookie.getJSON('userData') || []

const initialState = {cart: {cartItems}, userData:userData }
const reducer = combineReducers({
    products: productListReducer,
    product: productItemReducer,
    cart: cartReducer,
    userData: signinReducer,
    saveProduct: saveProductReducer
    
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)))


export default store;
