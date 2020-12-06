import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem, removeItem } from '../actions/actions';
import { faCoins, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useHistory} from 'react-router-dom'



function CartPage(props){
const {_id} = useParams()
let params = new URLSearchParams(document.location.search);
let qty = parseInt(params.get("qty"), 10);
const cart = useSelector(state=> state.cart);
const {userInfo} = useSelector(state=>state.userData)
const {data} = useSelector(state=>state.userData)
const items = cart.cartItems
const dispatch = useDispatch();
const history = useHistory();


useEffect(()=>{
    if(_id){
    dispatch(addItem(_id,qty))}
    
}
    ,[])

function handleCheckout(){
    if(userInfo || data){
        history.push('/shipping')
    }
    else{
        history.push('/signin?redirect=shipping')
    }

}

    return(
       <div>
            <h1>Shopping Cart</h1>
            <div className="cart">
        <div className="cart__items">
            {items.map((item)=>{
                return(
                    <div className="cart__item">
                <img style={{'float':'left','margin-right':'1rem'}} src={item.avatar} />
                <h2>{item.name}</h2>
                <label htmlFor="qty">Quantity:</label>
                
                <select style={{'margin-left':'1rem'}} name="qty" id="qty" value={item.qty} onChange={(e)=>(dispatch(addItem(item._id, e.target.value)))}>
            {Array(item.available).fill(null).map((x, index) => {
                return <option key={index+1} value={index+1}>{index+1}</option>
            })}
           
        </select>
        <p>Total price:<span style={{'visibility':'hidden'}}>iii</span><FontAwesomeIcon icon={faCoins} /> {item.price*item.qty}$</p>
        <FontAwesomeIcon onClick={()=>dispatch(removeItem(item._id))} style={{'float':'right','position':'absolute', 'top':'50%', 'right':'0', 'color':'red', 'fontSize':'1.5rem'}} icon={faTimes} />
       
        </div>
        
                
                
                )


                
            })}
        </div>
        <div className="cart__actions">
        <h2>Items: {items.reduce((a,b)=>a+Number(b.qty), 0)}</h2>
        <h2>Price: {items.reduce((a,b)=>a+Number(b.qty)*b.price, 0)}</h2>
        <button onClick={handleCheckout}>Go to checkout</button>
        </div>
            
        </div>
        </div>
    )
}

export default CartPage;