import {ADD_ITEM_TO_CART} from '../actions/actions'
import {REMOVE_ITEM_FROM_CART} from '../actions/actions'


function cartReducer(state = {cartItems:[]}, action){
    switch(action.type){
        case ADD_ITEM_TO_CART:
            let repeat = false;
            const itemToAdd = action.payload;
state.cartItems.forEach(item => {
    if (item.id == itemToAdd.id){
        repeat = true;
    }
})
if(repeat==false){
    return(
        {cartItems: [...state.cartItems, itemToAdd]}
    )

}
else{
    return(
        {cartItems: state.cartItems.map(item=> item.id==itemToAdd.id ? itemToAdd : item )}
    )
}
case REMOVE_ITEM_FROM_CART:
    return(
        {cartItems: state.cartItems.filter(item => item.id!=action.payload)}
    )
            
           
                
       
        
        default:
            return state;
    }
}

export default cartReducer


