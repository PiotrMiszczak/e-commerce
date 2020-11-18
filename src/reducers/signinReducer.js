import {SIGNIN_FAILED, SIGNIN_REQUEST, SIGNIN_SUCCEED} from '../actions/actions'

function signinReducer(state = {}, action){
    switch(action.type){
        case SIGNIN_REQUEST:
        return(
            {loading: true}
        )
        case SIGNIN_SUCCEED:
        return(
            {loading:false, userData:action.payload}
        )
        case SIGNIN_FAILED:
        return(
            {loading:false, userData:null, error:true}
        )
        default:
            return state;
    }
}


export default signinReducer;