import {MYORDERS_ERROR,MYORDERS_REQUEST,MYORDERS_SUCCES,ORDER_SAVE_ERROR, ORDER_SAVE_REQUEST, ORDER_SAVE_SUCCES, ORDER_RESET, ORDER_DETAILS_ERROR,ORDER_DETAILS_REQUEST,ORDER_DETAILS_SUCCES,ORDER_PAY_RESET, ORDER_PAY_ERROR, ORDER_PAY_REQUEST, ORDER_PAY_SUCCES} from '../actions/actions'

export const saveOrderReducer = (state = {}, action)=>{
    switch(action.type){
        case ORDER_SAVE_REQUEST:
        return(
            {loading: true}
        )
        case ORDER_SAVE_SUCCES:
        return(
            {loading:false,error:false, success:true, order:action.payload}
        )
        case ORDER_SAVE_ERROR:
        return(
            {loading:false, order:null, error:action.payload}
        )
        case ORDER_RESET:
            return  {}
            
        default:
            return state;
    }
}

export const detailsOrderReducer = (state = {}, action)=>{
    switch(action.type){
        case ORDER_DETAILS_REQUEST:
        return(
            {loading: true}
        )
        case ORDER_DETAILS_SUCCES:
        return(
            {loading:false,error:false, success:true, data:action.payload}
        )
        case ORDER_DETAILS_ERROR:
        return(
            {loading:false, order:null, error:action.payload}
        )
            
        default:
            return state;
    }
}

export const payOrderReducer = (state = {success:false}, action)=>{
    switch(action.type){
        case ORDER_PAY_REQUEST:
        return(
            {loading: true}
        )
        case ORDER_PAY_SUCCES:
        return(
            {loading:false,error:false, success:true}
        )
        case ORDER_PAY_ERROR:
        return(
            {loading:false, order:null, error:action.payload}
        )
        case ORDER_PAY_RESET:
            
        default:
            return state;
    }
}


export const myOrdersReducer = (state = {}, action)=>{
    switch(action.type){
        case MYORDERS_REQUEST:
        return(
            {loading: true}
        )
        case MYORDERS_SUCCES:
        return(
            {loading:false,error:false, orders:action.payload}
        )
        case ORDER_PAY_ERROR:
        return(
            {loading:false, orders:null, error:action.payload}
        )  
        default:
            return state;
    }
}

