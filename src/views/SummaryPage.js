import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { faCoins, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useHistory} from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import whisky from '../images/whisky.jpg'


function SummaryPage(props){

const {cartItems, shipping, payment} = useSelector(state=> state.cart);
const {userInfo} = useSelector(state=>state.userData)
const {data} = useSelector(state=>state.userData)
const dispatch = useDispatch();
const history = useHistory();

const itemsPrice =  cartItems.reduce((a,b)=>a+Number(b.qty)*b.price, 0);
const deliveryPrice = itemsPrice>200 ? 0 : 20;
const totalPrice = itemsPrice + deliveryPrice

 if(!data && !userInfo){
    history.push('/signin')
}
else if(!shipping){
    history.push('/shipping')
} 
else if(!payment){
    history.push('/payment')
}


function handleOrder(){
 
}

    return(
       <div>
            < ProgressBar step1 step2 step3 step4 />
            <div className="summary">
                <div className="summary__info">
                    <div className="summary__shipping">
                        <h2>Shipping</h2>
                        <p>{shipping.adress},{shipping.country}</p>
                    </div>
                    <div className="summary__payment">
                        <h2>Payment method</h2>
                        <p style={{'text-transform':'capitalize'}}>{payment}</p>
                    </div>
        <div className="cart__items">
            <h2>Shopping cart</h2>
            {cartItems.map((item)=>{
                return(
                    <div className="cart__item">
                <img style={{'float':'left','margin-right':'1rem'}} src={whisky} />
                <h2>{item.name}</h2>
                <p>Quantity: {item.qty}</p>
                
                
        <p>Total price:<span style={{'visibility':'hidden'}}>iii</span><FontAwesomeIcon icon={faCoins} /> {item.price*item.qty}$</p>
         </div>
         )
})}
        </div>
        </div>
        <div className="summary__actions">
       
        <h1>Order summary</h1>
        <p>Price: {itemsPrice}$</p>
        <p>Delivery price: {deliveryPrice==0 ? 'free' : deliveryPrice + '$'}</p>
<span>Total: {totalPrice}$</span>
<button className="summary__button">Place order</button>
        </div>
            
        </div>
        </div>
    )
}

export default SummaryPage;