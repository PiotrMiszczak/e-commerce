import {PRODUCT_SAVE_ERROR, PRODUCT_SAVE_REQEST, PRODUCT_SAVE_SUCCES} from '../actions/actions'

function saveProductReducer(state={}, action){
    switch(action){
        case PRODUCT_SAVE_REQEST:
            return {loading:true};
        case PRODUCT_SAVE_SUCCES:
            return {loading:false, productData:action.payload}
        case PRODUCT_SAVE_ERROR:
            return {loading:false, error:action.payload}
        default:
            return state
        

    }
}

export default saveProductReducer;