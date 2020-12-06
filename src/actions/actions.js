import axios from 'axios';
import Cookie from 'js-cookie';

export const PRODUCT_LIST_REQEST = 'PRODUCT_LIST_REQEST'
export const PRODUCT_LIST_SUCCES = 'PRODUCT_LIST_SUCCES'
export const PRODUCT_LIST_ERROR = 'PRODUCT_LIST_ERROR'
export const PRODUCT_ITEM_REQEST = 'PRODUCT_ITEM_REQEST'
export const PRODUCT_ITEM_SUCCES = 'PRODUCT_ITEM_SUCCES'
export const PRODUCT_ITEM_ERROR = 'PRODUCT_ITEM_ERROR'
export const PRODUCT_SAVE_ERROR = 'PRODUCT_SAVE_ERROR'
export const PRODUCT_SAVE_SUCCES = 'PRODUCT_SAVE_SUCCES'
export const PRODUCT_SAVE_REQEST = 'PRODUCT_SAVE_REQEST'
export const PRODUCT_DELETE_ERROR = 'PRODUCT_DELETE_ERROR'
export const PRODUCT_DELETE_SUCCES = 'PRODUCT_DELETE_SUCCES'
export const PRODUCT_DELETE_REQEST = 'PRODUCT_DELETE_REQEST'
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST'
export const SIGNIN_SUCCES = 'SIGNIN_SUCCEED'
export const SIGNIN_FAILED = 'SIGNIN_FAILED'
export const CART_SHIPPING = 'CART_SHIPPING'



const getRequest = () => async (dispatch) =>{
    try{
    dispatch({type:PRODUCT_LIST_REQEST})
    const  resp  = await axios.get('api/products')
    dispatch({type:PRODUCT_LIST_SUCCES, payload:resp.data})
    }
    catch(err){
        dispatch({type:PRODUCT_LIST_ERROR})
    }
}

const getRequestItem = (_id) => async (dispatch) =>{
    try{
    dispatch({type:PRODUCT_ITEM_REQEST})
    const  resp  = await axios.get(`api/products/${_id}`)
    dispatch({type:PRODUCT_ITEM_SUCCES, payload:resp.data})
    }
    catch(err){
        dispatch({type:PRODUCT_ITEM_ERROR})
    }
}

const addItem = (_id,qty) => async (dispatch, getState)=>{
    try {
        const  resp  = await axios.get(`api/products/${_id}`)

        dispatch({type:ADD_ITEM_TO_CART, payload:{
            _id: resp.data._id,
            name:resp.data.name,
            price:resp.data.price,
            avatar: resp.data.avatar,
            available: resp.data.qty,
            qty

        }})

const {cart:{cartItems}} = getState()
Cookie.set('cartItems', JSON.stringify(cartItems)) //  Local storage?
        
    } catch (error) {
        alert('404')
        
    }
    
}

const removeItem = (_id) => (dispatch, getState) => {
    dispatch({type:REMOVE_ITEM_FROM_CART, payload:_id})

   const {cart:{cartItems}} = getState()
Cookie.set('cartItems', JSON.stringify(cartItems))
}

const signIn = (password, email) => async (dispatch) => {
    
    try{
    dispatch({type:SIGNIN_REQUEST})
    const userData = await axios.post('/api/users/signin',{password, email})
    dispatch({type:SIGNIN_SUCCES, payload:userData.data})

   
Cookie.set('userData', JSON.stringify(userData))
}
catch(err){
    dispatch({type:SIGNIN_FAILED, payload:err.message})

}}

const register = (name, password, email) => async (dispatch) => {
    
    try{
    dispatch({type:SIGNIN_REQUEST})
    const userData = await axios.post('/api/users/register',{name, password, email})
    dispatch({type:SIGNIN_SUCCES, payload:userData.data})

   
Cookie.set('userData', JSON.stringify(userData))
}
catch(err){
    dispatch({type:SIGNIN_FAILED})

}}

const addProduct = (product) => async (dispatch, getState) =>{
    try{
    dispatch({type: PRODUCT_SAVE_REQEST})
    const {userData:{data}}=getState() // userdata:userdata ????
    if(!product._id){
    const newProduct = await axios.post('/api/products/', product, {headers:{Authorization:`bearer ${data.token}`}})
    dispatch({type: PRODUCT_SAVE_SUCCES, payload:newProduct.data})}
    else{
        const updatedProduct = await axios.put(`/api/products/${product._id}`, product, {headers:{Authorization:`bearer ${data.token}`}})
        dispatch({type: PRODUCT_SAVE_SUCCES, payload:updatedProduct.data})
    }
    }
    catch(error){
        dispatch({type:PRODUCT_SAVE_ERROR, payload:error.message})
    }
}


const deleteProduct = (product) => async (dispatch, getState) =>{
    try{
    dispatch({type: PRODUCT_DELETE_REQEST})
    const {userData:{data}}=getState() // userdata:userdata ????
    const deletedProduct = await axios.delete(`/api/products/${product._id}`, {headers:{Authorization:`bearer ${data.token}`}})
    dispatch({type: PRODUCT_DELETE_SUCCES, payload:deletedProduct.data})
    }
    catch(error){
        dispatch({type:PRODUCT_DELETE_ERROR, payload:error.message})
    }
}

const saveShipping = (data) => async (dispatch) =>{
    dispatch({type: CART_SHIPPING, payload:data})
}

 export{ getRequest, getRequestItem, addItem, removeItem, signIn, register, addProduct, deleteProduct, saveShipping}