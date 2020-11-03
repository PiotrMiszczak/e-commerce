import axios from 'axios';
export const PRODUCT_LIST_REQEST = 'PRODUCT_LIST_REQEST'
export const PRODUCT_LIST_SUCCES = 'PRODUCT_LIST_SUCCES'
export const PRODUCT_LIST_ERROR = 'PRODUCT_LIST_ERROR'


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
 export{ getRequest }