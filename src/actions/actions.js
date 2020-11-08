import axios from 'axios';
import Cookie from 'js-cookie';
import {getState} from 'react'
export const PRODUCT_LIST_REQEST = 'PRODUCT_LIST_REQEST'
export const PRODUCT_LIST_SUCCES = 'PRODUCT_LIST_SUCCES'
export const PRODUCT_LIST_ERROR = 'PRODUCT_LIST_ERROR'
export const PRODUCT_ITEM_REQEST = 'PRODUCT_ITEM_REQEST'
export const PRODUCT_ITEM_SUCCES = 'PRODUCT_ITEM_SUCCES'
export const PRODUCT_ITEM_ERROR = 'PRODUCT_ITEM_ERROR'
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'



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

const getRequestItem = (id) => async (dispatch) =>{
    try{
    dispatch({type:PRODUCT_ITEM_REQEST})
    const  resp  = await axios.get(`api/products/${id}`)
    dispatch({type:PRODUCT_ITEM_SUCCES, payload:resp.data})
    }
    catch(err){
        dispatch({type:PRODUCT_ITEM_ERROR})
    }
}

const addItem = (id,qty) => async (dispatch, getState)=>{
    try {
        const  resp  = await axios.get(`api/products/${id}`)

        dispatch({type:ADD_ITEM_TO_CART, payload:{
            id: resp.data.id,
            name:resp.data.name,
            price:resp.data.price,
            avatar: resp.data.avatar,
            available: resp.data.qty,
            qty

        }})

const {cart:{cartItems}} = getState()
Cookie.set('cartItems', JSON.stringify(cartItems))
        
    } catch (error) {
        alert('404')
        
    }
    
}

const removeItem = (id) => (dispatch, getState) => {
    dispatch({type:REMOVE_ITEM_FROM_CART, payload:id})

   const {cart:{cartItems}} = getState()
Cookie.set('cartItems', JSON.stringify(cartItems))
}

 export{ getRequest, getRequestItem, addItem, removeItem }